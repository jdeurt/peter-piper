import type { AnyIterable } from "../../types/iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates an iterable by concatenating an arbitrary amount of iterables to some base iterable.
 */
export const concat =
    <T>(...iterables: Iterable<T>[]) =>
    (base: Iterable<T>) =>
        ({
            [Symbol.iterator]: function* () {
                for (const iterable of [base, ...iterables]) {
                    yield* iterable;
                }
            },
        } as Iterable<T>);

/**
 * Creates an async iterable by concatenating an arbitrary amount of iterables to some base iterable.
 */
export const concatAsync =
    <T>(...iterables: AnyIterable<T>[]) =>
    (base: AnyIterable<T>) =>
        ({
            [Symbol.asyncIterator]: async function* () {
                for (const iterable of [
                    toAsyncIterable()(base),
                    ...iterables.map(toAsyncIterable()),
                ]) {
                    yield* iterable;
                }
            },
        } as AsyncIterable<T>);
