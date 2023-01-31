import type { AnyIterable } from "../../types/iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Tests whether any values of some input iterable satisfy the provided predicate.
 */
export const some =
    <T>(predicate: (value: T, index: number) => boolean) =>
    (iterable: Iterable<T>) => {
        let index = 0;
        let accumulator = false;

        for (const value of iterable) {
            accumulator = accumulator || predicate(value, index++);
        }

        return accumulator;
    };

/**
 * Asynchronously tests whether any values of some input iterable satisfy the provided predicate.
 */
export const someAsync =
    <T>(predicate: (value: T, index: number) => MaybePromise<boolean>) =>
    async (iterable: AnyIterable<T>) => {
        let index = 0;
        let accumulator = false;

        for await (const value of toAsyncIterable<T>()(iterable)) {
            accumulator = accumulator || (await predicate(value, index++));
        }

        return accumulator;
    };
