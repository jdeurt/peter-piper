import { hasProperty } from "./has-property";
import { isCallable } from "./is-callable";
import { isObject } from "./is-object";

export const isIterable = <T>(
    value: unknown
): value is AsyncIterable<T> | Iterable<T> => {
    return isAsyncIterable(value) || isSyncIterable(value);
};

export const isAsyncIterable = <T>(value: unknown): value is AsyncIterable<T> =>
    isObject(value) &&
    hasProperty(value, Symbol.asyncIterator) &&
    isCallable(value[Symbol.asyncIterator]);

export const isSyncIterable = <T>(value: unknown): value is Iterable<T> =>
    isObject(value) &&
    hasProperty(value, Symbol.iterator) &&
    isCallable(value[Symbol.iterator]);
