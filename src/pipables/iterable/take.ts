import type { AnyIterable } from "../../types/any-iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable.js";

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

                    for await (const value of toAsyncIterable<T>()(input)) {
                        if (index === x) {
                            return;
                        }

                        yield value;

                        index++;
                    }
                },
            } as AsyncIterable<T>)
    );
