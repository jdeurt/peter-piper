import type { AnyIterable } from "../types/iterable/any-iterable";

/**
 * Maps the provided iterable to an equivalent async iterable.
 */
export const toAsyncIterable = <T>(
    input: AnyIterable<T>
): AsyncIterable<T> => ({
    // eslint-disable-next-line @typescript-eslint/require-await
    [Symbol.asyncIterator]: async function* () {
        yield* input;
    },
});
