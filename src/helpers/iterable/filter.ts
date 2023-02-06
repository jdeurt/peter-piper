import { asyncIterable, iterable } from "../../util/iterable-factory";
import type { AnyIterable } from "../../types/any-iterable";
import type { MaybePromise } from "../../types/maybe-promise";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates a new iterable containing all values of some input iterable that satisfy the provided predicate.
 * @group Lazy helpers
 * @example
 * using([1, 0, 0, 1, 0]).pipe(
 *     filter((x) => x === 1)
 * );
 */
export const filter = <T>(
    predicate: (value: T, index: number) => MaybePromise<boolean>
) =>
    withIterableAssertion(
        (input: AnyIterable<T>): AsyncIterable<T> =>
            asyncIterable(async function* () {
                let index = 0;

                for await (const value of input) {
                    if (await predicate(value, index++)) {
                        yield value;
                    }
                }
            })
    );

export const filterSync = <T>(
    predicate: (value: T, index: number) => boolean
) =>
    withIterableAssertion(
        (input: Iterable<T>): Iterable<T> =>
            iterable(function* () {
                let index = 0;

                for (const value of input) {
                    if (predicate(value, index++)) {
                        yield value;
                    }
                }
            })
    );
