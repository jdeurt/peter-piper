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
        (input: AnyIterable<T>): AsyncIterable<T> => ({
            [Symbol.asyncIterator]: async function* () {
                let index = 0;

                for await (const value of input) {
                    if (await predicate(value, index++)) {
                        yield value;
                    }
                }
            },
        })
    );
