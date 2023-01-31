import type { AnyIterable } from "../../types/iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates a new array from the values of some input iterable.
 */
export const toArray =
    <T>() =>
    (iterable: Iterable<T>) =>
        [...iterable];

/**
 * Asynchronously creates a new array from the values of some input iterable.
 */
export const toArrayAsync =
    <T>() =>
    async (iterable: AnyIterable<T>) => {
        const result: T[] = [];

        for await (const value of toAsyncIterable<T>()(iterable)) {
            result.push(value);
        }

        return result;
    };
