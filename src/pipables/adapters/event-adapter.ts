type FactoryFn<T, U extends unknown[]> = (
    eventHandler: (...args: U) => void,
    target: T
) => unknown;

type CleanupFn<T, U extends unknown[]> = (
    eventHandler: (...args: U) => void,
    target: T
) => unknown;

/**
 * Creates an async iterable representation of some event target's events.
 * @param factory A function that creates an event listener.
 * @param cleanup A function that cleans up an event listener.
 * @example
 * withEventAdapter(
 *     (handler, target) => target.on("someEvent", handler),
 *     (handler, target) => target.removeListener("someEvent", handler)
 * )(someTarget);
 */
export const withEventAdapter =
    <T, U extends unknown[]>(
        factory: FactoryFn<T, U>,
        cleanup?: CleanupFn<T, U>
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

                factory(eventHandler, target);
            },
            cancel() {
                isDone = true;
                cleanup?.(eventHandler, target);
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
                    await reader.cancel();

                    return { value: [] as [] };
                },
            }),
        } as AsyncIterable<U | []>;
    };

export const eventAdapter = <U extends unknown[]>(
    factory: FactoryFn<undefined, U>,
    cleanup: CleanupFn<undefined, U>
    // eslint-disable-next-line unicorn/no-useless-undefined
) => withEventAdapter(factory, cleanup)(undefined);
