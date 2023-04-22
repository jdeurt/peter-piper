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
 * @returns A function that accepts an input iterable and returns an asynchronous iterable.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const asyncIterable = async<number>()(input);
 *
 * (async () => {
 *   for await (const x of asyncIterable) {
 *     console.log(x); // Logs 1, 2, 3
 *   }
 * })();
 * ```
 */
export const async = <T>() =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            for await (const x of toAsyncIterable(input)) {
                yield x;
            }
        })
    );
