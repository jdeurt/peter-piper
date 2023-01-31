import type { CookedPipe } from "./types/generated/cooked-pipe.js";
import type { Pipable } from "./types/pipable.js";

export const using = <T>(value: T) => ({
    pipe: ((...args: unknown[]) =>
        // eslint-disable-next-line unicorn/no-array-reduce
        args.reduce((x, f) => (f as Pipable)(x), value)) as CookedPipe<T>,
});

export * from "./pipables/index.js";
