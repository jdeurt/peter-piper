import type { Range } from "../../types/range";
import { iterable } from "../../util/iterable-factory";

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
