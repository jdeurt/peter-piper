import type { AnyIterable, AnySyncIterable } from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../util";

/**
 * Creates a new iterable by slicing some input iterable from the provided start index (inclusive) to the provided end index (exclusive).
 * If no end index is provided, `Number.POSITIVE_INFINITY` is used instead.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3, 4]).pipe(
 *     slice(1, 3)
 * );
 */
export const slice = <T>(
    startIndex: number,
    endIndex = Number.POSITIVE_INFINITY
) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            let index = 0;

            for await (const value of input) {
                if (index === endIndex) {
                    return;
                }

                if (index >= startIndex) {
                    yield value;
                }

                index++;
            }
        })
    );

/**
 * A sync variant of {@link slice}.
 * @group Lazy helpers
 *
 * @remarks
 * Available as `slice` when imported from `peter-piper/sync`.
 */
export const sliceSync = <T>(
    startIndex: number,
    endIndex = Number.POSITIVE_INFINITY
) =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        iterable(function* () {
            let index = 0;

            for (const value of input) {
                if (index === endIndex) {
                    return;
                }

                if (index >= startIndex) {
                    yield value;
                }

                index++;
            }
        })
    );
