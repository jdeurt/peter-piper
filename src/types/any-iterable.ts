import type { ExtendedAsyncIterable, ExtendedIterable } from "./pp-iterable";

export type AnyIterable<T> =
    | Iterable<T>
    | AsyncIterable<T>
    | ExtendedIterable<T>
    | ExtendedAsyncIterable<T>;
export type AnySyncIterable<T> = Iterable<T> | ExtendedIterable<T>;
