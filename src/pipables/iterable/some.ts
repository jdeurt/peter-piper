import type { AnyIterable } from "../../types/any-iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { toAsyncIterable } from "./to-async-iterable.js";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable.js";

/**
 * Tests whether any values of some input iterable satisfy the provided predicate.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     some((x) => x === 2)
 * );
 */
export const some = <T>(
    predicate: (value: T, index: number) => MaybePromise<boolean>
) =>
    withIterableAssertion(async (input: AnyIterable<T>) => {
        let index = 0;
        let accumulator = false;

        for await (const value of toAsyncIterable<T>()(input)) {
            accumulator = accumulator || (await predicate(value, index++));
        }

        return accumulator;
    });
