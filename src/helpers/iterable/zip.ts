import type { AnyIterable, AnySyncIterable, ElementOf } from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../util";
import { NOTHING } from "../../constants";
import { getIterator } from "../../util/iterable/get-iterator";

/**
 * Creates an iterable of n-tuples by grouping some input iterable's elements by indices.
 * @group Lazy helpers
 * @example
 * using([
 *     [1, 2, 3, 4],
 *     [2, 3, 4, 5]
 * ]).pipe(
 *     zip()
 * );
 *
 * @remarks
 * Because of the nature of this helper, the input iterable must be a sync iterable containing only other iterables. The child iterables can be sync or async.
 */
export const zip = <T extends AnyIterable<unknown>>() =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        asyncIterable(async function* () {
            const iterators = [...input].map((nestedIterable) =>
                getIterator(nestedIterable)
            );

            if (iterators.length === 0) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            while (true) {
                const nextResults = (await Promise.all(
                    iterators.map((iterator) => iterator.next())
                )) as IteratorResult<ElementOf<T>>[];

                const candidateElement = nextResults.map((nextResult) =>
                    nextResult.done ? NOTHING : nextResult.value
                );

                if (candidateElement.includes(NOTHING)) {
                    return;
                }

                yield candidateElement as ElementOf<T>[];
            }
        })
    );

/**
 * A sync variant of {@link zip}.
 * @group Lazy helpers
 *
 * @remarks
 * Available as `zip` when imported from `peter-piper/sync`.
 */
export const zipSync = <T extends AnySyncIterable<unknown>>() =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        iterable(function* () {
            const iterators = [...input].map((nestedIterable) =>
                getIterator(nestedIterable)
            );

            if (iterators.length === 0) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            while (true) {
                const nextResults = iterators.map((iterator) =>
                    iterator.next()
                ) as IteratorResult<ElementOf<T>>[];

                const candidateElement = nextResults.map((nextResult) =>
                    nextResult.done ? NOTHING : nextResult.value
                );

                if (candidateElement.includes(NOTHING)) {
                    return;
                }

                yield candidateElement as ElementOf<T>[];
            }
        })
    );
