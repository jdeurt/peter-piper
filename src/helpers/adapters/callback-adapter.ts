import type { IterableQueue } from "../../types";
import { queue } from "../generators";

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
 * Creates an async iterable queue that is populated with values from a provided factory function. The factory function is passed a CallbackAdapterContext object, which contains methods to pass values to the queue and mark the end of the iterable.
 * The optional cleanup function can be used to perform cleanup operations when the queue is sealed.
 *
 * @group Adapters
 * @template T - Type of the input object.
 * @template U - Tuple type representing the values passed to the queue.
 * @param {FactoryFn<T, U>} factory - A function that sets up the event listeners or other mechanisms to pass values to the queue.
 * @param {CleanupFn<T, U>} [cleanup] - An optional function that performs cleanup operations when the queue is sealed.
 * @returns {(input: T) => IterableQueue<U>} A function that takes an input object and returns an IterableQueue.
 *
 * @example
 * const someTarget = new EventEmitter();
 * const eventQueue = withCallbackAdapter(
 *   (context, target) => target.on("someEvent", context.pass),
 *   (context, target) => target.removeListener("someEvent", context.pass)
 * )(someTarget);
 *
 * (async () => {
 *   for await (const value of eventQueue) {
 *     console.log(value); // Logs event values as they are emitted
 *   }
 * })();
 *
 * // Emit some events
 * someTarget.emit("someEvent", "Hello");
 * someTarget.emit("someEvent", "World");
 */
export const withCallbackAdapter =
    <T, U extends unknown[]>(
        factory: FactoryFn<T, U>,
        cleanup?: CleanupFn<T, U>
    ) =>
    (input: T): IterableQueue<U> => {
        const q = queue<U>({
            onSealed: () => {
                cleanup?.(context, input);
            },
        });

        const context: CallbackAdapterContext<U> = {
            pass: (...args: U) => {
                q.push(args);
            },
            kill: () => {
                q.seal();
            },
        };

        factory(context, input);

        return q;
    };

/**
 * A non-currying variant of {@link withCallbackAdapter}. Creates an async iterable queue that is populated with values from a provided factory function without requiring an input object. The factory function is passed a CallbackAdapterContext object, which contains methods to pass values to the queue and mark the end of the iterable.
 * The optional cleanup function can be used to perform cleanup operations when the queue is sealed.
 *
 * @group Adapters
 * @template U - Tuple type representing the values passed to the queue.
 * @param {FactoryFn<undefined, U>} factory - A function that sets up the event listeners or other mechanisms to pass values to the queue.
 * @param {CleanupFn<undefined, U>} [cleanup] - An optional function that performs cleanup operations when the queue is sealed.
 * @returns {IterableQueue<U>} An IterableQueue populated with values from the provided factory function.
 *
 * @example
 * const someEmitter = new EventEmitter();
 * const factory = (context: CallbackAdapterContext<[string]>) => {
 *   someEmitter.on("someEvent", context.pass);
 * };
 * const cleanup = (context: CallbackAdapterContext<[string]>) => {
 *   someEmitter.removeListener("someEvent", context.pass);
 * };
 * const eventQueue = callbackAdapter(factory, cleanup);
 *
 * (async () => {
 *   for await (const value of eventQueue) {
 *     console.log(value); // Logs event values as they are emitted
 *   }
 * })();
 *
 * // Emit some events
 * someEmitter.emit("someEvent", "Hello");
 * someEmitter.emit("someEvent", "World");
 */
export const callbackAdapter = <U extends unknown[]>(
    factory: FactoryFn<undefined, U>,
    cleanup?: CleanupFn<undefined, U>
    // eslint-disable-next-line unicorn/no-useless-undefined
) => withCallbackAdapter(factory, cleanup)(undefined);
