import type {
    AnyIterable,
    AnySyncIterable,
    ArrayLikePredicate,
    AsyncArrayLikePredicate,
} from "../../types";
import { withIterableAssertion } from "../../util";

/**
 * Tests whether all values of some input iterable satisfy the provided predicate.
 * @group Greedy helpers
 * @example
 * using([2, 4, 6]).pipe(
 *     every((x) => x % 2 === 0)
 * )
 */
export const every = <T>(predicate: AsyncArrayLikePredicate<T>) =>
    withIterableAssertion(async (input: AnyIterable<T>): Promise<boolean> => {
        let index = 0;
        let accumulator = true;

        for await (const value of input) {
            accumulator = accumulator && (await predicate(value, index++));
        }

        return accumulator;
    });

/**
 * A sync variant of {@link every}.
 * @group Greedy helpers
 *
 * @remarks
 * Available as `every` when imported from `peter-piper/sync`.
 */
export const everySync = <T>(predicate: ArrayLikePredicate<T>) =>
    withIterableAssertion((input: AnySyncIterable<T>): boolean => {
        let index = 0;
        let accumulator = true;

        for (const value of input) {
            accumulator = accumulator && predicate(value, index++);
        }

        return accumulator;
    });
