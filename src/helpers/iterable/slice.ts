import type { AnyIterable, AnySyncIterable } from "../../types";
import {
    sliceGreedy,
    sliceGreedySync,
    sliceLazy,
    sliceLazySync,
    withIterableAssertion,
} from "../../util";

/**
 * Creates a new iterable by slicing some input iterable from the provided start index (inclusive) to the provided end index (exclusive).
 * If no end index is provided, `Number.POSITIVE_INFINITY` is used instead.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3, 4]).pipe(
 *     slice(1, 3)
 * );
 *
 * @remarks
 * Negative end indices are supported. However, if used, this helper becomes greedy and pools all values before returning a result.
 */
export const slice = <T>(startIndex = 0, endIndex = Number.POSITIVE_INFINITY) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        startIndex >= 0 && endIndex >= 0
            ? sliceLazy(input, startIndex, endIndex)
            : sliceGreedy(input, startIndex, endIndex)
    );

/**
 * A sync variant of {@link slice}.
 * @group Lazy helpers
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
