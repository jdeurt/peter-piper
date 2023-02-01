/**
 * Creates an async iterable representation of some event target's events.
 * @param factory A function that creates an event listener.
 * @param cleanup A function that cleans up an event listener.
 * @example
 * withEventAdapter(
 *     (target, handler) => target.on("someEvent", handler),
 *     (target, handler) => target.removeListener("someEvent", handler)
 * )(someTarget);
 */
export const withEventAdapter =
    <T, U extends unknown[]>(
        factory: (target: T, eventHandler: (...args: U) => void) => unknown,
        cleanup: (target: T, eventHandler: (...args: U) => void) => unknown
    ) =>
    (target: T) => {
        let isDone = false;

        let eventHandler: (...args: U) => void;

        const stream = new ReadableStream<U | []>({
            start(controller) {
                eventHandler = (...args: U) => {
                    if (isDone) {
                        return;
                    }

                    controller.enqueue(args);
                };

                factory(target, eventHandler);
            },
            cancel() {
                isDone = true;
                cleanup(target, eventHandler);
            },
        });

        const reader = stream.getReader();

        return {
            [Symbol.asyncIterator]: () => ({
                next: () => {
                    if (isDone) {
                        return Promise.resolve({
                            value: [] as [],
                            done: true,
                        });
                    }

                    return reader.read();
                },
                return: async () => {
                    isDone = true;
                    cleanup(target, eventHandler);

                    await reader.cancel();

                    return { value: [] as [] };
                },
            }),
        } as AsyncIterable<U | []>;
    };

export const eventAdapter = <T, U extends unknown[]>(
    target: T,
    factory: (target: T, eventHandler: (...args: U) => void) => unknown,
    cleanup: (target: T, eventHandler: (...args: U) => void) => unknown
) => withEventAdapter(factory, cleanup)(target);
