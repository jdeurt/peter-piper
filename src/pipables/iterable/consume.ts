import type { AnyIterable } from "../../types/iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Fully consumes some input iterable while passing each value of the iterable to the provided callback function. The values returned from calling the callback function are returned as an array.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     consume((x) => x);
 * );
 */
export const consume =
    <T, U>(callback: (value: T) => MaybePromise<U>) =>
    async (iterable: AnyIterable<T>) => {
        const results: U[] = [];

        for await (const value of toAsyncIterable<T>()(iterable)) {
            results.push(await callback(value));
        }

        return results;
    };
