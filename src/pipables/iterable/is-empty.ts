import type { AnyIterable } from "../../types/any-iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable.js";

/**
 * Returns `Promise<true>` if some input iterable is empty (i.e. can't produce any values). Returns `Promise<false>` otherwise.
 * @group Other helpers
 * @example
 * using([]).pipe(
 *     isEmpty()
 * )
 */
export const isEmpty = () =>
    withIterableAssertion((input: AnyIterable<unknown>) =>
        toAsyncIterable()(input)
            [Symbol.asyncIterator]()
            .next()
            .then(({ done }) => Boolean(done))
    );
