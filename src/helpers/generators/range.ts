import type { Range } from "../../types";
import { iterable } from "../../util";

/**
 * Creates an iterable that yields integers in order in the provided range.
 * @group Iterable factories
 * @example
 * for (const n of range([0, 100])) {
 *     console.log(n);
 * }
 */
export const range = ([from, to]: Range) =>
    iterable(function* () {
        for (let i = from; i <= to; i++) {
            yield i;
        }
    });
