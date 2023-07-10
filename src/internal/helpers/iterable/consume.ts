import type { AnyIterable, MapFn, MaybePromise } from "../../types";
import { withIterableAssertion } from "../../utils";

/**
 * Consumes an input iterable and optionally applies a mapping function to each element.
 * Returns a Promise of an array containing the results of the mapping function.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input iterable.
 * @template U - The type of elements in the resulting array.
 * @param mapFn - An optional mapping function to apply to each element of the input iterable.
 * @returns A function that accepts an input iterable and returns a Promise of an array containing the results.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const double = (x: number) => x * 2;
 * const consumedIterable = await consume<number, number>(double)(input);
 * console.log(consumedIterable); // Logs [2, 4, 6]
 * ```
 */
export const consume = <T, U>(mapFn?: MapFn<T, MaybePromise<U>>) =>
    withIterableAssertion(async (input: AnyIterable<T>): Promise<U[]> => {
        const results: U[] = [];

        let index = 0;

        for await (const value of input) {
            if (mapFn) {
                results.push(await mapFn(value, index++));
            }
        }

        return results;
    });

/**
 * Consumes an input sync iterable and optionally applies a mapping function to each element.
 * Returns an array containing the results of the mapping function.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input sync iterable.
 * @template U - The type of elements in the resulting array.
 * @param mapFn - An optional mapping function to apply to each element of the input sync iterable.
 * @returns A function that accepts an input sync iterable and returns an array containing the results.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const double = (x: number) => x * 2;
 * const consumedSyncIterable = consumeSync<number, number>(double)(input);
 * console.log(consumedSyncIterable); // Logs [2, 4, 6]
 * ```
 *
 * @remarks
 * Available as `consume` when imported from `peter-piper/sync`.
 */
export const consumeSync = <T, U>(mapFn?: MapFn<T, U>) =>
    withIterableAssertion((input: Iterable<T>): U[] => {
        const results: U[] = [];

        let index = 0;

        for (const value of input) {
            if (mapFn) {
                results.push(mapFn(value, index++));
            }
        }

        return results;
    });
