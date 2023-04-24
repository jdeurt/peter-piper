import type { AnyIterable, AnySyncIterable, MapFn } from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../utils";

/**
 * Maps an input iterable using a provided map function.
 * Returns a new asynchronous iterable.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @template U - The type of elements in the output iterable.
 * @param mapFn - A function that takes a value and its index and returns a new value.
 * @returns A function that accepts an input iterable and returns a new asynchronous iterable.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const double = (x: number) => x * 2;
 * const mappedIterable = map(double)(input);
 *
 * (async () => {
 *   for await (const x of mappedIterable) {
 *     console.log(x); // Logs 2, 4, 6
 *   }
 * })();
 * ```
 */
export const map = <T, U>(mapFn: MapFn<T, U>) => {
    return withIterableAssertion((input: AnyIterable<T>) => {
        let index = 0;

        return asyncIterable(async function* () {
            for await (const value of input) {
                yield mapFn(value, index++);
            }
        });
    });
};

/**
 * Maps an input sync iterable using a provided map function.
 * Returns a new synchronous iterable.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input sync iterable.
 * @template U - The type of elements in the output iterable.
 * @param mapFn - A function that takes a value and its index and returns a new value.
 * @returns A function that accepts an input sync iterable and returns a new synchronous iterable.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const double = (x: number) => x * 2;
 * const mappedSyncIterable = mapSync(double)(input);
 *
 * for (const x of mappedSyncIterable) {
 *   console.log(x); // Logs 2, 4, 6
 * }
 * ```
 *
 * @remarks
 * Available as `map` when imported from `peter-piper/sync`.
 */
export const mapSync = <T, U>(mapFn: MapFn<T, U>) =>
    withIterableAssertion((input: AnySyncIterable<T>) => {
        let index = 0;

        return iterable(function* () {
            for (const value of input) {
                yield mapFn(value, index++);
            }
        });
    });
