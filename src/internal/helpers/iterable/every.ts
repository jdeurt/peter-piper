import type {
    AnyIterable,
    ArrayLikePredicate,
    AsyncArrayLikePredicate,
} from "../../types";
import { withIterableAssertion } from "../../utils";

/**
 * Checks if every element in an input iterable satisfies a given predicate function.
 * Returns a Promise of a boolean value.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input iterable.
 * @param predicate - An async predicate function to test each element of the input iterable.
 * @returns A function that accepts an input iterable and returns a Promise of a boolean value.
 *
 * @example
 * ```ts
 * const input = [2, 4, 6];
 * const isEven = (x: number) => x % 2 === 0;
 * const everyResult = await every<number>(isEven)(input);
 * console.log(everyResult); // Logs true
 * ```
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
 * Checks if every element in an input sync iterable satisfies a given predicate function.
 * Returns a boolean value.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input sync iterable.
 * @param predicate - A predicate function to test each element of the input sync iterable.
 * @returns A function that accepts an input sync iterable and returns a boolean value.
 *
 * @example
 * ```ts
 * const input = [2, 4, 6];
 * const isEven = (x: number) => x % 2 === 0;
 * const everySyncResult = everySync<number>(isEven)(input);
 * console.log(everySyncResult); // Logs true
 * ```
 *
 * @remarks
 * Available as `every` when imported from `peter-piper/sync`.
 */
export const everySync = <T>(predicate: ArrayLikePredicate<T>) =>
    withIterableAssertion((input: Iterable<T>): boolean => {
        let index = 0;
        let accumulator = true;

        for (const value of input) {
            accumulator = accumulator && predicate(value, index++);
        }

        return accumulator;
    });
