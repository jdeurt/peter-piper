import type { AnyIterable } from "../../types/iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Returns `Promise<true>` if some input iterable is empty (i.e. can't produce any values). Returns `Promise<false>` otherwise.
 * @behavior non-consuming
 * @example
 * using([]).pipe(
 *     isEmpty()
 * )
 */
export const isEmpty = () => (value: AnyIterable<unknown>) =>
    toAsyncIterable()(value)
        [Symbol.asyncIterator]()
        .next()
        .then(({ done }) => Boolean(done));
