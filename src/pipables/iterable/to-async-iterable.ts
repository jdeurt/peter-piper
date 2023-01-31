import type { AnyIterable } from "../../types/iterable.js";

/**
 * Maps some input iterable to an equivalent async iterable.
 */
export const toAsyncIterable =
    <T>() =>
    (iterable: AnyIterable<T>): AsyncIterable<T> => ({
        // eslint-disable-next-line @typescript-eslint/require-await
        [Symbol.asyncIterator]: async function* () {
            yield* iterable;
        },
    });

/**
 * Maps some input stream to an equivalent async iterable.
 */
export const streamToAsyncIterable =
    <T>() =>
    (stream: ReadableStream<T>) => {
        return {
            [Symbol.asyncIterator]: () => {
                const reader = stream.getReader();
                return {
                    next: () => reader.read(),
                    return: () => reader.releaseLock(),
                };
            },
        };
    };
