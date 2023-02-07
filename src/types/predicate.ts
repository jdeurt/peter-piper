import type { MaybePromise } from "./maybe-promise";

export type Predicate<T> = (value: T, index: number) => boolean;

export type AsyncPredicate<T> = (
    value: T,
    index: number
) => MaybePromise<boolean>;
