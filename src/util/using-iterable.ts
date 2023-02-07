import type {
    ExtendedAsyncIterable,
    ExtendedIterable,
} from "../types/pp-iterable";
import { asyncIterable, iterable } from "./iterable-factory";
import type { AnyIterable } from "../types/any-iterable";
import type { ElementOf } from "../types/element-of";
import { assertIterable } from "./type-assertions/assert-iterable";
import { isAsyncIterable } from "./type-narrowing/is-iterable";

/**
 * Maps the provided async iterable to an equivalent Peter Piper async iterable.
 */
export function usingIterable<T>(
    iter: AsyncIterable<T>
): ExtendedAsyncIterable<T>;

/**
 * Maps the provided iterable to an equivalent Peter Piper iterable.
 */
export function usingIterable<T>(iter: Iterable<T>): ExtendedIterable<T>;

export function usingIterable<T extends AnyIterable<unknown>>(
    iter: T
): T extends AsyncIterable<unknown>
    ? ExtendedAsyncIterable<ElementOf<T>>
    : ExtendedIterable<ElementOf<T>> {
    assertIterable(iter);

    if (isAsyncIterable(iter)) {
        return asyncIterable(
            iter[Symbol.asyncIterator].bind(iter)
        ) as T extends AsyncIterable<unknown>
            ? ExtendedAsyncIterable<ElementOf<T>>
            : ExtendedIterable<ElementOf<T>>;
    }

    return iterable(
        iter[Symbol.iterator].bind(iter)
    ) as T extends AsyncIterable<unknown>
        ? ExtendedAsyncIterable<ElementOf<T>>
        : ExtendedIterable<ElementOf<T>>;
}
