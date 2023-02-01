import type { AnyIterable } from "../../types/any-iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable.js";

/**
 * Creates a new array from the values of some input iterable.
 * @group Greedy helpers
 * @example
 * using(new Set([1, 2, 3])).pipe(
 *     toArray()
 * );
 */
export const toArray = <T>() =>
    withIterableAssertion(async (input: AnyIterable<T>) => {
        const result: T[] = [];

        for await (const value of toAsyncIterable<T>()(input)) {
            result.push(value);
        }

        return result;
    });
