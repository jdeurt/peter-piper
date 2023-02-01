import type { AnyIterable } from "../../types/any-iterable.js";
import { hasProperty } from "./has-property.js";
import { isCallable } from "./is-callable.js";
import { isObject } from "./is-object.js";

export const isIterable = <T>(value: unknown): value is AnyIterable<T> => {
    return (
        isObject(value) &&
        ((hasProperty(value, Symbol.asyncIterator) &&
            isCallable(value[Symbol.asyncIterator])) ||
            (hasProperty(value, Symbol.iterator) &&
                isCallable(value[Symbol.iterator])))
    );
};

export const isAsyncIterable = <T>(
    iterable: AnyIterable<T>
): iterable is AsyncIterable<T> =>
    hasProperty(iterable, Symbol.asyncIterator) &&
    isCallable(iterable[Symbol.asyncIterator]);
