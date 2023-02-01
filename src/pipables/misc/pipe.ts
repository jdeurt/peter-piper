import type { Pipable } from "../../types/pipable.js";
import type { Pipe } from "../../types/generated/pipe.js";

/**
 * Pipes some input value through a series of functions, returning the result.
 * @behavior greedy
 * @example
 * using([1, 2, 3]).pipe(
 *     pipe(
 *         filter((x) => x > 0),
 *         filter((x) => x < 3)
 *     )
 * );
 */
export const pipe = ((...args: unknown[]) =>
    (value: unknown) =>
        // eslint-disable-next-line unicorn/no-array-reduce
        args.reduce((x, f) => (f as Pipable)(x), value)) as Pipe;
