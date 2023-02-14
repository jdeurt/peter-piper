import type { MaybePromise } from "./maybe-promise";

export type AsyncReducer<T, U> = (
    accumulator: U,
    value: T,
    index: number
) => MaybePromise<U>;

export type Reducer<T, U> = (accumulator: U, value: T, index: number) => U;
