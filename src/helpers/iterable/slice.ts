import type { AnyIterable } from "../../types/any-iterable";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates a new iterable by slicing some input iterable from the provided start index (inclusive) to the provided end index (exclusive).
 * If no end index is provided, `Number.POSITIVE_INFINITY` is used instead.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3, 4]).pipe(
 *     slice(1, 3)
 * );
 */
export const slice = <T>(
    startIndex: number,
    endIndex = Number.POSITIVE_INFINITY
) =>
    withIterableAssertion(
        (input: AnyIterable<T>) =>
            ({
                [Symbol.asyncIterator]: async function* () {
                    let index = 0;

                    for await (const value of input) {
                        if (index === endIndex) {
                            return;
                        }

                        if (index >= startIndex) {
                            yield value;
                        }

                        index++;
                    }
                },
            } as AsyncIterable<T>)
    );
