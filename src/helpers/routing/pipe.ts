import type { Pipable, Pipe } from "../../types";

/**
 * Pipes some input value through a series of functions, returning the result.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     pipe(
 *         filter((x) => x > 0),
 *         filter((x) => x < 3)
 *     )
 * );
 */
export const pipe = ((...args: unknown[]) =>
    (input: unknown) =>
        // eslint-disable-next-line unicorn/no-array-reduce
        args.reduce((x, f) => (f as Pipable)(x), input)) as Pipe;
