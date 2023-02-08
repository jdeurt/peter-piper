import { iterable, randomFloat, randomInt } from "../../util";
import type { Range } from "../../types";

/**
 * Creates an iterable that yields random floats in the provided range or from 0 to 1 if the range argument is omitted.
 * @group Iterable factories
 * @example
 * for (const n of randomFloats([0.1, 9.9])) {
 *     console.log(n);
 * }
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
 * @group Iterable factories
 * @example
 * for (const n of randomInts([0, 10])) {
 *     console.log(n);
 * }
 */
export const randomInts = (range: Range, generator?: () => number) =>
    iterable(function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (true) {
            yield randomInt(range, generator);
        }
    });
