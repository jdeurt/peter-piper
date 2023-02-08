import type { AnyIterable, AnySyncIterable } from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../util";

/**
 * Creates an iterable by concatenating an arbitrary amount of iterables to some base iterable.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     concat([4, 5, 6])
 * );
 */
export const concat = <T>(...iterables: AnyIterable<T>[]) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            for (const iter of [input, ...iterables]) {
                yield* iter;
            }
        })
    );

/**
 * A sync variant of {@link concat}.
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
