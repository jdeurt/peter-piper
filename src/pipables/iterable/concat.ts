import type { AnyIterable } from "../../types/any-iterable";
import { toAsyncIterable } from "./to-async-iterable";
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
        (input: AnyIterable<T>) =>
            ({
                [Symbol.asyncIterator]: async function* () {
                    for (const iterable of [
                        toAsyncIterable()(input),
                        ...iterables.map(toAsyncIterable()),
                    ]) {
                        yield* iterable;
                    }
                },
            } as AsyncIterable<T>)
    );
