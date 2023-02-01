import type { AnyIterable, ContainedIterableType } from "../types/iterable.js";

export function isIterable<T>(value: unknown): value is AnyIterable<T> {
    return (
        typeof value === "object" &&
        value !== null &&
        (Reflect.has(value, Symbol.iterator) ||
            Reflect.has(value, Symbol.asyncIterator))
    );
}

export const isSyncIterable = <T>(
    iterable: AnyIterable<T>
): iterable is Iterable<T> => Reflect.has(iterable, Symbol.iterator);

export const isAsyncIterable = <T>(
    iterable: AnyIterable<T>
): iterable is AsyncIterable<T> => Reflect.has(iterable, Symbol.asyncIterator);

export const getIterator = <T extends AnyIterable<unknown>>(iterable: T) =>
    (isSyncIterable(iterable)
        ? iterable[Symbol.iterator]()
        : iterable[Symbol.asyncIterator]()) as T extends Iterable<unknown>
        ? Iterator<ContainedIterableType<T>>
        : AsyncIterator<ContainedIterableType<T>>;