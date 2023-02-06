import type { AnyIterable } from "../types/any-iterable";
import { isAsyncIterable } from "./type-narrowing/is-iterable";

export function lift<T, U>(
    iterable: Iterable<T>,
    transform: (value: T) => U
): Iterable<U>;

export function lift<T, U>(
    iterable: AsyncIterable<T>,
    transform: (value: T) => U
): AsyncIterable<U>;

export function lift<T, U>(
    iterable: AnyIterable<T>,
    transform: (value: T) => U
): AnyIterable<U>;

export function lift<T, U>(
    iterable: AnyIterable<T>,
    transform: (value: T) => U
): AnyIterable<U> {
    if (isAsyncIterable(iterable)) {
        return {
            [Symbol.asyncIterator]: async function* () {
                for await (const value of iterable) {
                    yield transform(value);
                }
            },
        };
    }

    return {
        [Symbol.iterator]: function* () {
            for (const value of iterable) {
                yield transform(value);
            }
        },
    };
}
