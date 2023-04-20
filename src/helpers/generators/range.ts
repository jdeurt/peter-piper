import type { Range } from "../../types";
import { iterable } from "../../utils";

/**
 * Creates an iterable that yields integers in order in the provided range.
 *
 * @group Iterable factories
 * @param {Range} range - A range [from, to] specifying the range of integers to generate.
 * @returns {Iterable<number>} An iterable of integers in the specified range.
 *
 * @example
 * for (const n of range([0, 100])) {
 *     console.log(n); // Logs integers from 0 to 100 (inclusive)
 * }
 */
export const range = ([from, to]: Range) =>
    iterable(function* () {
        for (let i = from; i <= to; i++) {
            yield i;
        }
    });
