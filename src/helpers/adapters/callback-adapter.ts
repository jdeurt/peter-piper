import { asyncIterable } from "../../utils";

/**
 * The context of the callback adapter. Contains functions that allow for passing values to the iterable and marking the end of an iterable.
 */
export interface CallbackAdapterContext<T extends unknown[]> {
    /**
     * Passes values to the iterable returned by the {@link callbackAdapter}.
     */
    pass: (...values: T) => void;

    /**
     * Marks the end of the iterable returned by the {@link callbackAdapter}.
     */
    kill: () => void;
}

export type FactoryFn<T, U extends unknown[]> = (
    context: CallbackAdapterContext<U>,
    target: T
) => unknown;

export type CleanupFn<T, U extends unknown[]> = (
    context: CallbackAdapterContext<U>,
    target: T
) => unknown;

/**
 * Creates an async iterable that generates values passed via calling `pass` in the {@link CallbackAdapterContext}.
 * @group Adapters
 * @example
 * withCallbackAdapter(
 *     (context, target) => target.on("someEvent", context.pass),
 *     (context, target) => target.removeListener("someEvent", context.pass)
 * )(someTarget);
 */
export const withCallbackAdapter =
    <T, U extends unknown[]>(
        factory: FactoryFn<T, U>,
        cleanup?: CleanupFn<T, U>
    ) =>
    (input: T) => {
        let isDone = false;

        // @ts-expect-error 2739
        // Properties are set below. We need this here for scope reasons.
        const context: CallbackAdapterContext<U> = {};

        const stream = new ReadableStream<U>({
            start(controller) {
                context.pass = (...args: U) => {
                    if (isDone) {
                        return;
                    }

                    controller.enqueue(args);
                };

                context.kill = () => {
                    isDone = true;

                    cleanup?.(context, input);

                    controller.close();
                };

                factory(context, input);
            },
        });

        return asyncIterable(() => {
            const reader = stream.getReader();

            return {
                next: () => {
                    if (isDone) {
                        return Promise.resolve({
                            value: [],
                            done: true,
                        });
                    }

                    return reader.read();
                },
                return: () => {
                    context.kill();

                    return Promise.resolve({ value: [] });
                },
            } as AsyncIterator<U>;
        });
    };

/**
 * A non-currying variant of {@link withCallbackAdapter}.
 * @group Adapters
 */
export const callbackAdapter = <U extends unknown[]>(
    factory: FactoryFn<undefined, U>,
    cleanup?: CleanupFn<undefined, U>
    // eslint-disable-next-line unicorn/no-useless-undefined
) => withCallbackAdapter(factory, cleanup)(undefined);
