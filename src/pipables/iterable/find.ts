import type { AnyIterable } from "../../types/iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Retrieves the first value of some input iterable that satisfies the provided predicate.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     find((x) => x === 2)
 * );
 */
export const find =
    <T>(predicate: (value: T, index: number) => MaybePromise<boolean>) =>
    async (iterable: AnyIterable<T>) => {
        let index = 0;

        for await (const value of toAsyncIterable<T>()(iterable)) {
            if (await predicate(value, index++)) {
                return value;
            }
        }
    };
