import type {
    AnyIterable,
    ArrayLikePredicate,
    AsyncArrayLikePredicate,
} from "../../types";
import { withIterableAssertion } from "../../utils";

/**
 * Finds the first element in an input iterable that satisfies a given async predicate function.
 * Returns a Promise of the found element or undefined if none is found.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input iterable.
 * @param predicate - An async predicate function to test each element of the input iterable.
 * @returns A function that accepts an input iterable and returns a Promise of the found element or undefined.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4];
 * const isEven = async (x: number) => x % 2 === 0;
 * const foundElement = await find<number>(isEven)(input);
 * console.log(foundElement); // Logs 2
 * ```
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
 * Finds the first element in an input sync iterable that satisfies a given predicate function.
 * Returns the found element or undefined if none is found.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input sync iterable.
 * @param predicate - A predicate function to test each element of the input sync iterable.
 * @returns A function that accepts an input sync iterable and returns the found element or undefined.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4];
 * const isEven = (x: number) => x % 2 === 0;
 * const foundSyncElement = findSync<number>(isEven)(input);
 * console.log(foundSyncElement); // Logs 2
 * ```
 *
 * @remarks
 * Available as `find` when imported from `peter-piper/sync`.
 */
export const findSync = <T>(predicate: ArrayLikePredicate<T>) =>
    withIterableAssertion((input: Iterable<T>): T | undefined => {
        let index = 0;

        for (const value of input) {
            if (predicate(value, index++)) {
                return value;
            }
        }
    });
