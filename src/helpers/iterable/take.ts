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
        (input: AnyIterable<T>) =>
            ({
                [Symbol.asyncIterator]: async function* () {
                    let index = 0;

                    for await (const value of input) {
                        if (index === x) {
                            return;
                        }

                        yield value;

                        index++;
                    }
                },
            } as AsyncIterable<T>)
    );
