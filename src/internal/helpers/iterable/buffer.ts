import type { AnyIterable } from "../../types";
import { asyncIterable } from "../../utils";

/**
 * Creates a buffered asynchronous iterable from an input iterable with a specified time delay between elements.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @param ms - The number of milliseconds to delay between elements.
 * @returns A function that accepts an input iterable and returns a buffered asynchronous iterable with the specified delay.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const bufferedIterable = buffer<number>(500)(input);
 *
 * (async () => {
 *   for await (const x of bufferedIterable) {
 *     console.log(x); // Logs 1, 2, 3 with a 500ms delay between each value
 *   }
 * })();
 * ```
 */
export const buffer = <T>(ms: number) => {
    let lastPass = Number.NEGATIVE_INFINITY;

    return (input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            for await (const value of input) {
                const now = Date.now();

                if (now > lastPass + ms) {
                    lastPass = now;

                    yield value;
                } else {
                    await new Promise((resolve) => setTimeout(resolve, ms));

                    yield value;

                    lastPass = Date.now();
                }
            }
        });
};
