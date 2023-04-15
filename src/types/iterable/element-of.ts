import type { AnyIterable } from "./any-iterable";

export type ElementOf<T extends AnyIterable<unknown>> = T extends AnyIterable<
    infer V
>
    ? V
    : never;
