import type { AnyIterable } from "../../types/any-iterable";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates a new array from the values of some input iterable.
 * @group Greedy helpers
 * @example
 * using(new Set([1, 2, 3])).pipe(
 *     toArray()
 * );
 */
export const toArray = <T>() =>
    withIterableAssertion(async (input: AnyIterable<T>) => {
        const result: T[] = [];

        for await (const value of input) {
            result.push(value);
        }

        return result;
    });
