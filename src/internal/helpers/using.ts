import type { CookedPipe } from "../types/generated/cooked-pipe";
import type { Pipable } from "../types/pipable";

/**
 * Creates a new "cooked" pipe using the provided value as the starting input.
 * @deprecated Use {@link from} with iterable helpers instead.
 * @example
 * using("Hello World!").pipe(
 *     (str) => str.split(" ")
 * );
 */
export const using = <T>(value: T) => ({
    pipe: ((...fns: unknown[]) =>
        // eslint-disable-next-line unicorn/no-array-reduce
        fns.reduce((x, f) => (f as Pipable)(x), value)) as CookedPipe<T>,
});
