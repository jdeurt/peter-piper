import type { AnyIterable } from "../../types/any-iterable";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Maps some input iterable to an equivalent async iterable.
 * Note that all iterable helpers already do this implicitly.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     toAsyncIterable()
 * );
 */
export const toAsyncIterable = <T>() =>
    withIterableAssertion(
        (input: AnyIterable<T>): AsyncIterable<T> => ({
            // eslint-disable-next-line @typescript-eslint/require-await
            [Symbol.asyncIterator]: async function* () {
                yield* input;
            },
        })
    );
