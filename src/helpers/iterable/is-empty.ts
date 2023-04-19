import type { AnyIterable, AnySyncIterable } from "../../types";
import { toAsyncIterable, withIterableAssertion } from "../../utils";

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

/**
 * A sync variant of {@link isEmpty}.
 * @group Other helpers
 *
 * @remarks
 * Available as `isEmpty` when imported from `peter-piper/sync`.
 */
export const isEmptySync = () =>
    withIterableAssertion((input: AnySyncIterable<unknown>): boolean =>
        Boolean(input[Symbol.iterator]().next().done)
    );
