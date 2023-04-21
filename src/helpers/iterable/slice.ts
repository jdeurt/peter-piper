import type { AnyIterable, AnySyncIterable } from "../../types";
import {
    sliceGreedy,
    sliceGreedySync,
    sliceLazy,
    sliceLazySync,
    withIterableAssertion,
} from "../../utils";

/**
 * Slices an input iterable between the specified start and end indices.
 * If both start and end indices are non-negative, the slicing is performed lazily.
 * Otherwise, the slicing is performed greedily.
 *
 * @group Lazy/Greedy helpers
 * @template T - The type of elements in the input iterable.
 * @param startIndex - Optional. The start index for the slice, defaults to 0.
 * @param endIndex - Optional. The end index for the slice, defaults to Number.POSITIVE_INFINITY.
 * @returns A function that accepts an input iterable and returns an async iterable that yields the sliced values.
 *
 * @example
 * ```ts
 * const input = asyncIterable([1, 2, 3, 4, 5]);
 * const sliced = slice(1, 4)(input);
 *
 * (async () => {
 *   for await (const value of sliced) {
 *     console.log(value); // Logs 2, 3, 4
 *   }
 * })();
 * ```
 */
export const slice = <T>(startIndex = 0, endIndex = Number.POSITIVE_INFINITY) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        startIndex >= 0 && endIndex >= 0
            ? sliceLazy(input, startIndex, endIndex)
            : sliceGreedy(input, startIndex, endIndex)
    );

/**
 * Slices an input sync iterable between the specified start and end indices.
 * If both start and end indices are non-negative, the slicing is performed lazily.
 * Otherwise, the slicing is performed greedily.
 *
 * @group Lazy/Greedy helpers
 * @template T - The type of elements in the input sync iterable.
 * @param startIndex - Optional. The start index for the slice, defaults to 0.
 * @param endIndex - Optional. The end index for the slice, defaults to Number.POSITIVE_INFINITY.
 * @returns A function that accepts an input sync iterable and returns an iterable that yields the sliced values.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4, 5];
 * const slicedSync = sliceSync(1, 4)(input);
 *
 * for (const value of slicedSync) {
 *   console.log(value); // Logs 2, 3, 4
 * }
 * ```
 *
 * @remarks
 * Available as `slice` when imported from `peter-piper/sync`.
 */
export const sliceSync = <T>(
    startIndex = 0,
    endIndex = Number.POSITIVE_INFINITY
) =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        startIndex >= 0 && endIndex >= 0
            ? sliceLazySync(input, startIndex, endIndex)
            : sliceGreedySync(input, startIndex, endIndex)
    );
