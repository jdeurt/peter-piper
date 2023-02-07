import type { AnyIterable, AnySyncIterable } from "../../types/any-iterable";
import type { AsyncPredicate, Predicate } from "../../types/predicate";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Retrieves the first value of some input iterable that satisfies the provided predicate.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     find((x) => x === 2)
 * );
 */
export const find = <T>(predicate: AsyncPredicate<T>) =>
    withIterableAssertion(
        async (input: AnyIterable<T>): Promise<T | undefined> => {
            let index = 0;

            for await (const value of input) {
                if (await predicate(value, index++)) {
                    return value;
                }
            }
        }
    );

export const findSync = <T>(predicate: Predicate<T>) =>
    withIterableAssertion((input: AnySyncIterable<T>): T | undefined => {
        let index = 0;

        for (const value of input) {
            if (predicate(value, index++)) {
                return value;
            }
        }
    });
