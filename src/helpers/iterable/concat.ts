import { asyncIterable, iterable } from "../../util/iterable-factory";
import type { AnyIterable } from "../../types/any-iterable";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates an iterable by concatenating an arbitrary amount of iterables to some base iterable.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     concat([4, 5, 6])
 * );
 */
export const concat = <T>(...iterables: AnyIterable<T>[]) =>
    withIterableAssertion(
        (input: AnyIterable<T>): AsyncIterable<T> =>
            asyncIterable(async function* () {
                for (const iter of [input, ...iterables]) {
                    yield* iter;
                }
            })
    );

export const concatSync = <T>(...iterables: Iterable<T>[]) =>
    withIterableAssertion(
        (input: Iterable<T>): Iterable<T> =>
            iterable(function* () {
                for (const iter of [input, ...iterables]) {
                    yield* iter;
                }
            })
    );
