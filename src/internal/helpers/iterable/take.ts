import { asyncIterable, iterable, withIterableAssertion } from "../../utils";
import type { AnyIterable } from "../../types";

/**
 * Lazily takes the first `n` elements from the input iterable.
 * Returns an async iterable with the first `n` elements of the input iterable.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @param n - The number of elements to take from the input iterable.
 * @returns A function that accepts an input iterable and returns an async iterable with the first `n` elements of the input iterable.
 *
 * @example
 * ```ts
 * const input = asyncIterable([1, 2, 3, 4, 5]);
 * const takeThree = take(3)(input);
 *
 * (async () => {
 *   for await (const value of takeThree) {
 *     console.log(value); // Logs 1, 2, 3
 *   }
 * })();
 * ```
 */
export const take = <T>(n: number) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            let index = 0;

            for await (const value of input) {
                if (index === n) {
                    return;
                }

                yield value;

                index++;
            }
        })
    );

/**
 * Lazily takes the first n elements from the input sync iterable.
 * Returns a sync iterable that yields the first n elements of the input sync iterable.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @param n - The number of elements to take from the input iterable.
 * @returns A function that accepts an input iterable and returns a sync iterable of the first n elements.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4, 5];
 * const firstThreeElements = takeSync(3)(input);
 *
 * for (const value of firstThreeElements) {
 *   console.log(value); // Logs 1, 2, and 3
 * }
 * ```
 *
 * @remarks
 * Available as `take` when imported from `peter-piper/sync`.
 */
export const takeSync = <T>(n: number) =>
    withIterableAssertion((input: Iterable<T>) =>
        iterable(function* () {
            let index = 0;

            for (const value of input) {
                if (index === n) {
                    return;
                }

                yield value;

                index++;
            }
        })
    );
