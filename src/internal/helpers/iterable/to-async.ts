import {
    asyncIterable,
    toAsyncIterable,
    withIterableAssertion,
} from "../../utils";
import type { AnyIterable } from "../../types";

/**
 * Maps the given input iterable to an equivalent asynchronous iterable.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @param {AnyIterable<T>} input - The input iterable to map to an asynchronous iterable.
 * @returns {AsyncIterable<T>} An asynchronous iterable that generates the same elements as the input iterable.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const asyncIterable = toAsync<number>(input);
 *
 * (async () => {
 *   for await (const x of asyncIterable) {
 *     console.log(x); // Logs 1, 2, 3
 *   }
 * })();
 * ```
 */
export const toAsync = withIterableAssertion(<T>(input: AnyIterable<T>) =>
    asyncIterable(async function* () {
        for await (const x of toAsyncIterable(input)) {
            yield x;
        }
    })
);
