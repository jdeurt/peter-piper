import type { MaybePromise } from "./maybe-promise";

export type ArrayLikePredicate<T> = (value: T, index: number) => boolean;

export type AsyncArrayLikePredicate<T> = (
    value: T,
    index: number
) => MaybePromise<boolean>;
