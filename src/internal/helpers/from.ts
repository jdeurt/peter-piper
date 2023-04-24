import type {
    ExtendedAsyncIterable,
    ExtendedIterable,
} from "../types/iterable/extended-iterable";
import { asyncIterable, iterable } from "../utils/iterable-factory";
import {
    isAsyncIterable,
    isIterable,
} from "../utils/type-narrowing/is-iterable";
import {
    isAsyncIteratorFunction,
    isIteratorFunction,
} from "../utils/type-narrowing/is-iterator-function";
import type { AnyIterable } from "../types/iterable/any-iterable";
import type { ElementOf } from "../types/iterable/element-of";

/**
 * Maps the provided async iterable to an equivalent Peter Piper async iterable.
 */
export function from<T>(value: AsyncIterable<T>): ExtendedAsyncIterable<T>;

/**
 * Maps the provided iterable to an equivalent Peter Piper iterable.
 */
export function from<T>(value: Iterable<T>): ExtendedIterable<T>;

/**
 * Maps the provided async iterator to an equivalent Peter Piper async iterable.
 */
export function from<T>(
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    value: () => AsyncIterator<T>
): ExtendedAsyncIterable<T>;

/**
 * Maps the provided iterator to an equivalent Peter Piper iterable.
 */
// eslint-disable-next-line @typescript-eslint/unified-signatures
export function from<T>(value: () => Iterator<T>): ExtendedIterable<T>;

/**
 * Wraps a value in an iterable and then maps the iterable to an equivalent Peter Piper iterable.
 */
// eslint-disable-next-line @typescript-eslint/unified-signatures
export function from<T>(value: T): ExtendedIterable<T>;

export function from<T>(
    value: T
): T extends AnyIterable<unknown>
    ? ExtendedAsyncIterable<ElementOf<T>> | ExtendedIterable<ElementOf<T>>
    : T extends () => AsyncIterator<unknown> | Iterator<unknown>
    ? ExtendedAsyncIterable<T> | ExtendedIterable<T>
    : ExtendedIterable<T> {
    type R = T extends AnyIterable<unknown>
        ? ExtendedAsyncIterable<ElementOf<T>> | ExtendedIterable<ElementOf<T>>
        : T extends () => AsyncIterator<unknown> | Iterator<unknown>
        ? ExtendedAsyncIterable<T> | ExtendedIterable<T>
        : ExtendedIterable<T>;

    if (isAsyncIteratorFunction(value)) {
        return asyncIterable(value) as R;
    }

    if (isIteratorFunction(value)) {
        return iterable(value) as R;
    }

    if (!isIterable(value)) {
        return iterable(function* () {
            yield value;
        }) as R;
    }

    if (isAsyncIterable(value)) {
        return asyncIterable(async function* () {
            for await (const yielded of value) {
                yield yielded;
            }
        }) as R;
    }

    return iterable(function* () {
        for (const yielded of value) {
            yield yielded;
        }
    }) as R;
}
