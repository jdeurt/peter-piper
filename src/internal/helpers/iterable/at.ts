import type { AnyIterable, AnySyncIterable } from "../../types";
import {
    atGreedy,
    atGreedySync,
    atLazy,
    atLazySync,
    withIterableAssertion,
} from "../../utils";

/**
 * Retrieves the element at a given index from an input iterable.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input iterable.
 * @param i - The index of the element to retrieve.
 * @returns A function that accepts an input iterable and returns the element at the specified index.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const elementAtIndex2 = at<number>(2)(input);
 * console.log(elementAtIndex2); // Logs 3
 * ```
 */
export const at = <T>(i: number) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        i >= 0 ? atLazy(input, i) : atGreedy(input, i)
    );

/**
 * Retrieves the element at a given index from an input sync iterable.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input sync iterable.
 * @param i - The index of the element to retrieve.
 * @returns A function that accepts an input sync iterable and returns the element at the specified index.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const elementAtIndex2 = atSync<number>(2)(input);
 * console.log(elementAtIndex2); // Logs 3
 * ```
 *
 * @remarks
 * Available as `at` when imported from `peter-piper/sync`.
 */
export const atSync = <T>(i: number) =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        i >= 0 ? atLazySync(input, i) : atGreedySync(input, i)
    );
