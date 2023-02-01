import type { AnyIterable } from "../../types/iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates a new array from the values of some input iterable.
 * @group Greedy helpers
 * @example
 * using(new Set([1, 2, 3])).pipe(
 *     toArray()
 * );
 */
export const toArray =
    <T>() =>
    async (iterable: AnyIterable<T>) => {
        const result: T[] = [];

        for await (const value of toAsyncIterable<T>()(iterable)) {
            result.push(value);
        }

        return result;
    };
