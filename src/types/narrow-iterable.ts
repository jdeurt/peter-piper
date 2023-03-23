import type { ExtendedAsyncIterable, ExtendedIterable } from "./pp-iterable";
import type { AnyIterable } from "./any-iterable";
import type { ElementOf } from "./element-of";

export type AsExtendedIterable<T extends AnyIterable<unknown>> =
    ExtendedIterable<ElementOf<T>>;

export type AsExtendedAsyncIterable<T extends AnyIterable<unknown>> =
    ExtendedAsyncIterable<ElementOf<T>>;
