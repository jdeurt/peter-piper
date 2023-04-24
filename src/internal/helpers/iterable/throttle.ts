import type { AnyIterable } from "../../types";
import { asyncIterable } from "../../utils";

/**
 * Throttles the input iterable, only yielding elements at most every ms milliseconds. Elements that are not yielded are discarded.
 * Returns an async iterable that yields elements from the input iterable, but throttled.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @param ms - The minimum number of milliseconds between each yielded element.
 * @returns A function that accepts an input iterable and returns a throttled async iterable.
 *
 * @example
 * ```ts
 * const input = asyncIterable(...);
 * const throttledInput = throttle(1000)(input);
 *
 * (async () => {
 *   for await (const value of throttledInput) {
 *     console.log(value); // Logs elements with at least 1000ms delay between each log
 *   }
 * })();
 * ```
 */
export const throttle = <T>(ms: number) => {
    let lastPass = Number.NEGATIVE_INFINITY;

    return (input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            for await (const value of input) {
                const now = Date.now();

                if (now > lastPass + ms) {
                    lastPass = now;

                    yield value;
                }
            }
        });
};
