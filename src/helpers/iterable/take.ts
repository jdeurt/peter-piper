import type { AnyIterable, AnySyncIterable } from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../util";

/**
 * Creates a new iterable containing only the first `x` values of some input iterable.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     take(2)
 * );
 */
export const take = <T>(n: number) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            let index = 0;

            for await (const value of input) {
                if (index === n) {
                    return;
                }

                yield value;

                index++;
            }
        })
    );

export const takeSync = <T>(n: number) =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        iterable(function* () {
            let index = 0;

            for (const value of input) {
                if (index === n) {
                    return;
                }

                yield value;

                index++;
            }
        })
    );
