import type { AnyIterable, ElementOf } from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../utils";
import { getIterator } from "../../utils/iterable/get-iterator";

/**
 * Zips together elements from the input iterables into arrays.
 * Returns a function that accepts an input iterable of iterables and
 * yields arrays of elements from the input iterables, where the first elements of the input iterables
 * are combined, the second elements are combined, and so on.
 *
 * The input iterable containing child iterables MUST be synchronous. The child iterables can be either synchronous or asynchronous.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable of iterables.
 * @returns A function that accepts an input iterable of iterables and returns an async iterable.
 *
 * @example
 * ```ts
 * const input = iterable([[1, 2, 3], ['a', 'b', 'c']]);
 * const result = await toArray(zip()(input)); // [[1, 'a'], [2, 'b'], [3, 'c']]
 * ```
 */
export const zip = <T extends AnyIterable<unknown>>() =>
    withIterableAssertion((input: Iterable<T>) =>
        asyncIterable(async function* () {
            const iterators = [...input].map((nestedIterable) =>
                getIterator(nestedIterable)
            );

            if (iterators.length === 0) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            while (true) {
                const nexts = (await Promise.all(
                    iterators.map((iterator) => iterator.next())
                )) as IteratorResult<ElementOf<T>, ElementOf<T>>[];

                if (nexts.some(({ done }) => done)) {
                    break;
                }

                yield nexts.map(({ value }) => value);
            }
        })
    );

/**
 * Zips together elements from the input sync iterables into arrays.
 * Returns a function that accepts an input sync iterable of sync iterables and
 * yields arrays of elements from the input sync iterables, where the first elements of the input sync iterables
 * are combined, the second elements are combined, and so on.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input sync iterable of sync iterables.
 * @returns A function that accepts an input sync iterable of sync iterables and returns an iterable.
 *
 * @example
 * ```ts
 * const input = iterable([[1, 2, 3], ['a', 'b', 'c']]);
 * const result = toArraySync(zipSync()(input)); // [[1, 'a'], [2, 'b'], [3, 'c']]
 * ```
 *
 * @remarks
 * Available as `zip` when imported from `peter-piper/sync`.
 */
export const zipSync = <T extends Iterable<unknown>>() =>
    withIterableAssertion((input: Iterable<T>) =>
        iterable(function* () {
            const iterators = [...input].map((nestedIterable) =>
                getIterator(nestedIterable)
            );

            if (iterators.length === 0) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            while (true) {
                const nexts = iterators.map((iterator) =>
                    iterator.next()
                ) as IteratorResult<ElementOf<T>, ElementOf<T>>[];

                if (nexts.some(({ done }) => done)) {
                    break;
                }

                yield nexts.map(({ value }) => value);
            }
        })
    );
