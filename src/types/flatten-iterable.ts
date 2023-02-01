import type { Decrement } from "./math.js";

export type FlattenIterable<T, Depth extends number> = Depth extends 0
    ? T
    : T extends Iterable<infer U>
    ? FlattenIterable<U, Decrement<Depth>>
    : T;

export type FlattenAsyncIterable<T, Depth extends number> = Depth extends 0
    ? T
    : T extends AsyncIterable<infer U>
    ? FlattenAsyncIterable<U, Decrement<Depth>>
    : T;
