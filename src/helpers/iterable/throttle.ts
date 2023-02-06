import type { AnyIterable } from "../../types/any-iterable";

/**
 * Creates a new iterable consiting of only values of some input iterable yielded `ms` milliseconds apart.
 * @group Lazy helpers
 * @example
 * using(someAsyncGenerator()).pipe(
 *     throttle(2000) // 2 seconds
 * );
 */
export const throttle = <T>(ms: number) => {
    let lastPass = Number.NEGATIVE_INFINITY;

    return (input: AnyIterable<T>): AsyncIterable<T> => ({
        [Symbol.asyncIterator]: async function* () {
            for await (const value of input) {
                const now = Date.now();

                if (now > lastPass + ms) {
                    lastPass = now;

                    yield value;
                }
            }
        },
    });
};
