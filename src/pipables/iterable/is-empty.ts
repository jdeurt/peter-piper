import type { AnyIterable } from "../../types/iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Returns `Promise<true>` if some input iterable is empty (i.e. can't produce any values). Returns `Promise<false>` otherwise.
 * @group Other helpers
 * @example
 * using([]).pipe(
 *     isEmpty()
 * )
 */
export const isEmpty = () => (input: AnyIterable<unknown>) =>
    toAsyncIterable()(input)
        [Symbol.asyncIterator]()
        .next()
        .then(({ done }) => Boolean(done));
