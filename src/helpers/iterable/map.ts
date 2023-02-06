import type { AnyIterable } from "../../types/any-iterable";
import { lift } from "../../util/lift";
import { toAsyncIterable } from "../../util/to-async-iterable";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates a new iterable which's values are the result of mapping some input iterable using the provided callback function.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     map((x) => x * 2)
 * );
 */
export const map = <T, U>(callback: (value: T, index: number) => U) =>
    withIterableAssertion((input: AnyIterable<T>): AsyncIterable<U> => {
        let index = 0;

        return lift(toAsyncIterable(input), (value) =>
            callback(value, index++)
        );
    });

export const mapSync = <T, U>(callback: (value: T, index: number) => U) =>
    withIterableAssertion((input: Iterable<T>): Iterable<U> => {
        let index = 0;

        return lift(input, (value) => callback(value, index++));
    });
