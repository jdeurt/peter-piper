import type {
    AnyIterable,
    AnySyncIterable,
    ArrayLikePredicate,
    AsyncArrayLikePredicate,
} from "../../types";
import { withIterableAssertion } from "../../util";

/**
 * Retrieves the first value of some input iterable that satisfies the provided predicate.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     find((x) => x === 2)
 * );
 */
export const find = <T>(predicate: AsyncArrayLikePredicate<T>) =>
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

/**
 * A sync variant of {@link find}.
 * @group Greedy helpers
 *
 * @remarks
 * Available as `find` when imported from `peter-piper/sync`.
 */
export const findSync = <T>(predicate: ArrayLikePredicate<T>) =>
    withIterableAssertion((input: AnySyncIterable<T>): T | undefined => {
        let index = 0;

        for (const value of input) {
            if (predicate(value, index++)) {
                return value;
            }
        }
    });
