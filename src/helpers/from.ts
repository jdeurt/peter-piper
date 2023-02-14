import type {
    ExtendedAsyncIterable,
    ExtendedIterable,
} from "../types/pp-iterable";
import { asyncIterable, iterable } from "../util/iterable-factory";
import {
    isAsyncIterable,
    isIterable,
} from "../util/type-narrowing/is-iterable";
import type { AnyIterable } from "../types/any-iterable";
import type { ElementOf } from "../types/element-of";

/**
 * Maps the provided async iterable to an equivalent Peter Piper async iterable.
 */
export function from<T extends AsyncIterable<unknown>>(
    value: T
): ExtendedAsyncIterable<ElementOf<T>>;

/**
 * Maps the provided iterable to an equivalent Peter Piper iterable.
 */
export function from<T extends Iterable<unknown>>(
    value: T
): ExtendedIterable<ElementOf<T>>;

/**
 * Wraps a value in an iterable and then maps the iterable to an equivalent Peter Piper iterable.
 */
export function from<T>(value: T): ExtendedIterable<T>;

export function from<T>(
    value: T
): T extends AnyIterable<unknown>
    ? ExtendedAsyncIterable<ElementOf<T>> | ExtendedIterable<ElementOf<T>>
    : ExtendedIterable<T> {
    if (!isIterable(value)) {
        return iterable(function* () {
            yield value;
        }) as T extends AnyIterable<unknown>
            ?
                  | ExtendedAsyncIterable<ElementOf<T>>
                  | ExtendedIterable<ElementOf<T>>
            : ExtendedIterable<T>;
    }

    if (isAsyncIterable(value)) {
        return asyncIterable(
            value[Symbol.asyncIterator].bind(value)
        ) as T extends AnyIterable<unknown>
            ?
                  | ExtendedAsyncIterable<ElementOf<T>>
                  | ExtendedIterable<ElementOf<T>>
            : ExtendedIterable<T>;
    }

    return iterable(
        value[Symbol.iterator].bind(value)
    ) as T extends AnyIterable<unknown>
        ? ExtendedAsyncIterable<ElementOf<T>> | ExtendedIterable<ElementOf<T>>
        : ExtendedIterable<T>;
}
