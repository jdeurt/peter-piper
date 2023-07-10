import type { AnyIterable, MaybePromise } from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../utils";

/**
 * Applies a given function to each element of the input iterable.
 * Returns the same iterable passed as input.
 *
 * @template T - The type of elements in the input iterable.
 * @param fn - A function that takes an element and its index, applies side effects, and returns nothing.
 * @returns A function that accepts an input iterable and returns an async iterable.
 * @group Lazy helpers
 *
 * @example
 * ```ts
 * using([1, 2, 3])
 *     .forEach((n) => console.log(n)) // Logs 1, 2, and 3
 *     .consume();
 * ```
 */
export const forEach = <T>(
    fn: (element: T, index: number) => MaybePromise<void>
) => {
    return withIterableAssertion((input: AnyIterable<T>) => {
        let index = 0;

        return asyncIterable(async function* () {
            for await (const value of input) {
                await fn(value, index++);

                yield value;
            }
        });
    });
};

/**
 * Applies a given function to each element of the input iterable.
 * Returns the same iterable passed as input.
 *
 * @template T - The type of elements in the input iterable.
 * @param fn - A function that takes an element and its index, applies side effects, and returns nothing.
 * @returns A function that accepts an input iterable and returns a sync iterable.
 * @group Lazy helpers
 *
 * @example
 * ```ts
 * using([1, 2, 3])
 *     .forEach((n) => console.log(n)) // Logs 1, 2, and 3
 *     .consume();
 * ```
 *
 * @remarks
 * Available as `forEach` when imported from `peter-piper/sync`.
 */
export const forEachSync = <T>(fn: (element: T, index: number) => void) => {
    return withIterableAssertion((input: Iterable<T>) => {
        let index = 0;

        return iterable(function* () {
            for (const value of input) {
                fn(value, index++);

                yield value;
            }
        });
    });
};
