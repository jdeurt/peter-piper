import type { AnyIterable } from "../../types/iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Retrieves the first value of some input iterable that satisfies the provided predicate.
 */
export const find =
    <T>(predicate: (value: T, index: number) => boolean) =>
    (iterable: Iterable<T>) => {
        let index = 0;

        for (const value of iterable) {
            if (predicate(value, index++)) {
                return value;
            }
        }
    };

/**
 * Asynchronously retrieves the first value of some input iterable that satisfies the provided predicate.
 */
export const findAsync =
    <T>(predicate: (value: T, index: number) => MaybePromise<boolean>) =>
    async (iterable: AnyIterable<T>) => {
        let index = 0;

        for await (const value of toAsyncIterable<T>()(iterable)) {
            if (await predicate(value, index++)) {
                return value;
            }
        }
    };
