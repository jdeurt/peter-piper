import type { AnyIterable, AnySyncIterable } from "../../types/any-iterable";
import { toAsyncIterable } from "../../util/to-async-iterable";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Returns `Promise<true>` if some input iterable is empty (i.e. can't produce any values). Returns `Promise<false>` otherwise.
 * @group Other helpers
 * @example
 * using([]).pipe(
 *     isEmpty()
 * )
 */
export const isEmpty = () =>
    withIterableAssertion(
        (input: AnyIterable<unknown>): Promise<boolean> =>
            toAsyncIterable(input)
                [Symbol.asyncIterator]()
                .next()
                .then(({ done }) => Boolean(done))
    );

export const isEmptySync = () =>
    withIterableAssertion((input: AnySyncIterable<unknown>): boolean =>
        Boolean(input[Symbol.iterator]().next().done)
    );
