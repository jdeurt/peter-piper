import type { AnyIterable } from "../../types/any-iterable";
import type { MaybePromise } from "../../types/maybe-promise";
import { lift } from "../../util/lift";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates a new iterable which's values are the result of mapping some input iterable using the provided callback function.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     map((x) => x * 2)
 * );
 */
export const map = <T, U>(
    callback: (value: T, index: number) => MaybePromise<U>
) =>
    withIterableAssertion((input: AnyIterable<T>): AsyncIterable<U> => {
        let index = 0;

        return lift(input, (value) => callback(value, index++));
    });
