import type { AnyIterable, AnySyncIterable } from "../../types";
import { withIterableAssertion } from "../../utils";

/**
 * Converts the input iterable to an array.
 * Returns a function that accepts an input iterable and returns a promise resolving to an array
 * of the elements from the input iterable.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input iterable.
 * @returns A function that accepts an input iterable and returns a promise resolving to an array.
 *
 * @example
 * ```ts
 * const input = asyncIterable([1, 2, 3, 4, 5]);
 * const result = await toArray()(input); // [1, 2, 3, 4, 5]
 * ```
 */
export const toArray = <T>() =>
    withIterableAssertion(async (input: AnyIterable<T>): Promise<T[]> => {
        const result: T[] = [];

        for await (const value of input) {
            result.push(value);
        }

        return result;
    });

/**
 * Converts the input sync iterable to an array.
 * Returns a function that accepts an input sync iterable and returns an array
 * of the elements from the input sync iterable.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input sync iterable.
 * @returns A function that accepts an input sync iterable and returns an array.
 *
 * @example
 * ```ts
 * const input = iterableOf([1, 2, 3, 4, 5]);
 * const result = toArraySync()(input); // [1, 2, 3, 4, 5]
 * ```
 *
 * @remarks
 * Available as `toArray` when imported from `peter-piper/sync`.
 */
export const toArraySync = <T>() =>
    withIterableAssertion((input: AnySyncIterable<T>): T[] => {
        const result: T[] = [];

        for (const value of input) {
            result.push(value);
        }

        return result;
    });
