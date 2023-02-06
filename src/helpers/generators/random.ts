import { randomFloat, randomInt } from "../../util/random";
import type { Range } from "../../types/range";

/**
 * Creates an iterable that yields random floats in the provided range or from 0 to 1 if the range argument is omitted.
 * @group Iterable factories
 * @example
 * for (const n of randomFloats([0.1, 9.9])) {
 *     console.log(n);
 * }
 */
export const randomFloats = (range?: Range): Iterable<number> => ({
    [Symbol.iterator]: function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (true) {
            yield randomFloat(range ?? [0, 1]);
        }
    },
});

/**
 * Creates an iterable that yields random integers in the provided range.
 * @group Iterable factories
 * @example
 * for (const n of randomInts([0, 10])) {
 *     console.log(n);
 * }
 */
export const randomInts = (range: Range): Iterable<number> => ({
    [Symbol.iterator]: function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (true) {
            yield randomInt(range);
        }
    },
});