import type { AnyIterable } from "../../types/any-iterable";
import type { MaybePromise } from "../../types/maybe-promise";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates an iterable containing only the first value of some input iterable or, if a predicate is provided, the first value to satisfy that predicate.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     first((x) => x === 2)
 * );
 */
export const first = <T>(
    predicate?: (value: T, index: number) => MaybePromise<boolean>
) =>
    withIterableAssertion((input: AnyIterable<T>): AsyncIterable<T> => {
        let index = 0;

        return {
            [Symbol.asyncIterator]: async function* () {
                for await (const value of input) {
                    if (predicate === undefined) {
                        yield value;
                        return;
                    }

                    if (await predicate(value, index++)) {
                        yield value;
                        return;
                    }
                }
            },
        };
    });
