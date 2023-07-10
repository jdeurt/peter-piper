import type { AnyIterable, ElementOf } from "../../types";
import { isAsyncIterable, isSyncIterable } from "../type-narrowing";
import { fork } from "../fork";

export function getIterator<T>(iterable: Iterable<T>): Iterator<T>;

export function getIterator<T>(
    asyncIterable: AsyncIterable<T>
): AsyncIterator<T>;

export function getIterator<T extends AnyIterable<unknown>>(
    iterable: T
): T extends Iterable<unknown>
    ? Iterator<ElementOf<T>, ElementOf<T>>
    : AsyncIterator<ElementOf<T>, ElementOf<T>>;

/**
 * Returns the iterator embedded in an iterable.
 */
export function getIterator<T extends AnyIterable<unknown>>(iterable: T) {
    return fork(
        iterable,
        [isAsyncIterable, isSyncIterable],
        [
            (iter) => (iter as AsyncIterable<unknown>)[Symbol.asyncIterator](),
            (iter) => (iter as Iterable<unknown>)[Symbol.iterator](),
        ]
    ) as T extends Iterable<unknown>
        ? Iterator<ElementOf<T>, ElementOf<T>>
        : AsyncIterator<ElementOf<T>, ElementOf<T>>;
}
