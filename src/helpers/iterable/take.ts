import { asyncIterable, iterable } from "../../util/iterable-factory";
import type { AnyIterable } from "../../types/any-iterable";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates a new iterable containing only the first `x` values of some input iterable.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     take(2)
 * );
 */
export const take = <T>(x: number) =>
    withIterableAssertion(
        (input: AnyIterable<T>): AsyncIterable<T> =>
            asyncIterable(async function* () {
                let index = 0;

                for await (const value of input) {
                    if (index === x) {
                        return;
                    }

                    yield value;

                    index++;
                }
            })
    );

export const takeSync = <T>(x: number) =>
    withIterableAssertion(
        (input: Iterable<T>): Iterable<T> =>
            iterable(function* () {
                let index = 0;

                for (const value of input) {
                    if (index === x) {
                        return;
                    }

                    yield value;

                    index++;
                }
            })
    );
