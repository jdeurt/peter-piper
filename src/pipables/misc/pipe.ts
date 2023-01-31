import type { Pipable } from "../../types/pipable.js";
import type { Pipe } from "../../types/generated/pipe.js";

/**
 * Pipes some input value through a series of functions, returning the result.
 */
export const pipe = ((...args: unknown[]) =>
    (value: unknown) =>
        // eslint-disable-next-line unicorn/no-array-reduce
        args.reduce((x, f) => (f as Pipable)(x), value)) as Pipe;
