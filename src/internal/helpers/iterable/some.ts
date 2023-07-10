import type {
    AnyIterable,
    ArrayLikePredicate,
    AsyncArrayLikePredicate,
} from "../../types";
import { withIterableAssertion } from "../../utils";

/**
 * Tests if some element in the input iterable satisfies the given predicate.
 * Returns a Promise resolving to true if at least one element in the input iterable passes the predicate check.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input iterable.
 * @param predicate - An async predicate function to test the elements in the input iterable.
 * @returns A function that accepts an input iterable and returns a Promise resolving to true if at least one element passes the predicate check, otherwise false.
 *
 * @example
 * ```ts
 * const input = asyncIterableOf([1, 2, 3, 4, 5]);
 * const isEven = (value: number) => value % 2 === 0;
 * const hasEvenNumber = some(isEven)(input);
 *
 * (async () => {
 *   console.log(await hasEvenNumber); // Logs true
 * })();
 * ```
 */
export const some = <T>(predicate: AsyncArrayLikePredicate<T>) =>
    withIterableAssertion(async (input: AnyIterable<T>): Promise<boolean> => {
        let index = 0;
        let accumulator = false;

        for await (const value of input) {
            accumulator = accumulator || (await predicate(value, index++));
        }

        return accumulator;
    });

/**
 * Tests if some element in the input sync iterable satisfies the given predicate.
 * Returns true if at least one element in the input sync iterable passes the predicate check.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input sync iterable.
 * @param predicate - A predicate function to test the elements in the input sync iterable.
 * @returns A function that accepts an input sync iterable and returns true if at least one element passes the predicate check, otherwise false.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4, 5];
 * const isEven = (value: number) => value % 2 === 0;
 * const hasEvenNumber = someSync(isEven)(input);
 *
 * console.log(hasEvenNumber); // Logs true
 * ```
 *
 * @remarks
 * Available as `some` when imported from `peter-piper/sync`.
 */
export const someSync = <T>(predicate: ArrayLikePredicate<T>) =>
    withIterableAssertion((input: Iterable<T>): boolean => {
        let index = 0;
        let accumulator = false;

        for (const value of input) {
            accumulator = accumulator || predicate(value, index++);
        }

        return accumulator;
    });
