import { hasProperty } from "./has-property";
import { isCallable } from "./is-callable";
import { isObject } from "./is-object";

/**
 * Returns a boolean representing whether or not the provided value is ANY iterable, async or otherwise.
 */
export const isIterable = <T>(
    value: unknown
): value is AsyncIterable<T> | Iterable<T> => {
    return isAsyncIterable(value) || isSyncIterable(value);
};

/**
 * Returns a boolean representing whether or not the provided value is an async iterable.
 */
export const isAsyncIterable = <T>(value: unknown): value is AsyncIterable<T> =>
    isObject(value) &&
    hasProperty(value, Symbol.asyncIterator) &&
    isCallable(value[Symbol.asyncIterator]);

/**
 * Returns a boolean representing whether or not the provided value is a sync iterable.
 */
export const isSyncIterable = <T>(value: unknown): value is Iterable<T> =>
    isObject(value) &&
    hasProperty(value, Symbol.iterator) &&
    isCallable(value[Symbol.iterator]);
