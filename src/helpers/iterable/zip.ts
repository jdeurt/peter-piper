import type { AnyIterable, AnySyncIterable } from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../util";
import { NOTHING } from "../../constants";
import { getIterator } from "../../util/iterable/get-iterator";

// TODO

/**
 * Creates an iterable of 2-tuples by grouping some input iterable's elements with the provided iterable's elements or `NOTHING` if no more elements are available for that tuple.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     zip([4, 5, 6])
 * );
 */
export const zip = <T>(iter: AnyIterable<T>) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            const inputIterator = getIterator(input);
            const providedIterator = getIterator(iter);

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            while (true) {
                const [nextFromInput, nextFromProvided] = await Promise.all([
                    inputIterator.next(),
                    providedIterator.next(),
                ]);

                if (nextFromInput.done && nextFromProvided.done) {
                    return;
                }

                yield [
                    nextFromInput.done ? nextFromInput.value : NOTHING,
                    nextFromProvided.done ? nextFromProvided.value : NOTHING,
                ];
            }
        })
    );

/**
 * A sync variant of {@link zip}.
 * @group Lazy helpers
 *
 * @remarks
 * Available as `concat` when imported from `peter-piper/sync`.
 */
export const concatSync = <T>(...iterables: AnySyncIterable<T>[]) =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        iterable(function* () {
            for (const iter of [input, ...iterables]) {
                yield* iter;
            }
        })
    );
