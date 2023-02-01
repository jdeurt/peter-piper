import type { AnyIterable } from "../../types/iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates a new iterable which's values are the result of mapping some input iterable using the provided callback function.
 * @behavior lazy
 * @example
 * using([1, 2, 3]).pipe(
 *     map((x) => x * 2)
 * );
 */
export const map =
    <T, U>(callback: (value: T, index: number) => MaybePromise<U>) =>
    (iterable: AnyIterable<T>) =>
        ({
            [Symbol.asyncIterator]: async function* () {
                let index = 0;

                for await (const value of toAsyncIterable<T>()(iterable)) {
                    yield await callback(value, index++);
                }
            },
        } as AsyncIterable<U>);
