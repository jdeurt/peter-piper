import type { AnyIterable } from "../../types/iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Returns `true` if some input iterable is empty (i.e. can't produce any values). Returns `false` otherwise.
 */
export const isEmpty = () => (value: Iterable<unknown>) =>
    Boolean(value[Symbol.iterator]().next().done);

/**
 * Returns `Promise<true>` if some input iterable is empty (i.e. can't produce any values). Returns `Promise<false>` otherwise.
 */
export const isEmptyAsync = () => (value: AnyIterable<unknown>) =>
    toAsyncIterable()(value)
        [Symbol.asyncIterator]()
        .next()
        .then(({ done }) => Boolean(done));
