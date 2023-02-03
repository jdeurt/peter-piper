import type { AnyIterable } from "../../types/any-iterable";
import type { MaybePromise } from "../../types/maybe-promise";
import { toAsyncIterable } from "./to-async-iterable";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Tests whether all values of some input iterable satisfy the provided predicate.
 * @group Greedy helpers
 * @example
 * using([2, 4, 6]).pipe(
 *     every((x) => x % 2 === 0)
 * )
 */
export const every = <T>(
    predicate: (value: T, index: number) => MaybePromise<boolean>
) =>
    withIterableAssertion(async (input: AnyIterable<T>) => {
        let index = 0;
        let accumulator = true;

        for await (const value of toAsyncIterable<T>()(input)) {
            accumulator = accumulator && (await predicate(value, index++));
        }

        return accumulator;
    });
