import { iterable, randomFloat, randomInt } from "../../utils";
import type { Range } from "../../types";

/**
 * Creates an iterable that yields random floats in the provided range or from 0 to 1 if the range argument is omitted.
 *
 * @group Iterable factories
 * @param {Range} [range] - An optional range [min, max] to generate random floats within.
 * @param {() => number} [generator] - An optional custom generator function that returns a random number.
 * @returns {Iterable<number>} An iterable of random float values.
 *
 * @example
 * ```ts
 * for (const n of randomFloats([0.1, 9.9])) {
 *     console.log(n); // Logs random float values between 0.1 and 9.9 (inclusive)
 * }
 * ```
 */
export const randomFloats = (range?: Range, generator?: () => number) =>
    iterable(function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (true) {
            yield randomFloat(range ?? [0, 1], generator);
        }
    });

/**
 * Creates an iterable that yields random integers in the provided range.
 *
 * @group Iterable factories
 * @param {Range} range - A range [min, max] to generate random integers within.
 * @param {() => number} [generator] - An optional custom generator function that returns a random number.
 * @returns {Iterable<number>} An iterable of random integer values.
 *
 * @example
 * for (const n of randomInts([0, 10])) {
 *     console.log(n); // Logs random integer values between 0 and 10 (inclusive)
 * }
 */
export const randomInts = (range: Range, generator?: () => number) =>
    iterable(function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (true) {
            yield randomInt(range, generator);
        }
    });
