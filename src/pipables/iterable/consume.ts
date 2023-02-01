import type { AnyIterable } from "../../types/any-iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { toAsyncIterable } from "./to-async-iterable.js";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable.js";

/**
 * Fully consumes some input iterable while passing each value of the iterable to the provided callback function. The values returned from calling the callback function are returned as an array.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     consume((x) => x);
 * );
 *
 * @remarks
 *
 * Since this helper is greedy, it will only stop consuming values when the input's iterator lets it know there are no values left to consume.
 * Using an input iterable which's iterator never returns will cause this helper to run indefinitely.
 */
export const consume = <T, U>(callback: (value: T) => MaybePromise<U>) =>
    withIterableAssertion(async (input: AnyIterable<T>) => {
        const results: U[] = [];

        for await (const value of toAsyncIterable<T>()(input)) {
            results.push(await callback(value));
        }

        return results;
    });
