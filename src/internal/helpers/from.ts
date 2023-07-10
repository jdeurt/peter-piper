import type {
    ExtendedAsyncIterable,
    ExtendedIterable,
} from "../types/iterable/extended-iterable";
import {
    isAsyncIterable,
    isIterable,
} from "../utils/type-narrowing/is-iterable";
import {
    isAsyncIteratorFunction,
    isIteratorFunction,
} from "../utils/type-narrowing/is-iterator-function";
import { xAsyncIterable, xIterable } from "../utils/iterable-factory";
import type { AnyIterable } from "../types/iterable/any-iterable";
import type { ElementOf } from "../types/iterable/element-of";

/**
 * Maps the provided async iterable to an equivalent extended async iterable.
 */
export function from<T>(value: AsyncIterable<T>): ExtendedAsyncIterable<T>;

/**
 * Maps the provided iterable to an equivalent extended iterable.
 */
export function from<T>(value: Iterable<T>): ExtendedIterable<T>;

/**
 * Maps the provided async iterator to an equivalent extended async iterable.
 */
export function from<T>(
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    value: () => AsyncIterator<T>
): ExtendedAsyncIterable<T>;

/**
 * Maps the provided iterator to an equivalent extended iterable.
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
        return xAsyncIterable(value) as R;
    }

    if (isIteratorFunction(value)) {
        return xIterable(value) as R;
    }

    if (!isIterable(value)) {
        return xIterable(function* () {
            yield value;
        }) as R;
    }

    if (isAsyncIterable(value)) {
        return xAsyncIterable(async function* () {
            for await (const yielded of value) {
                yield yielded;
            }
        }) as R;
    }

    return xIterable(function* () {
        for (const yielded of value) {
            yield yielded;
        }
    }) as R;
}
