import type { MaybePromise } from "./maybe-promise";
import type { PLACEHOLDER } from "../constants/placeholder";

export type MatchPath<T = never, U = unknown> = [
    predicate: (value: T) => MaybePromise<boolean>,
    callback: (value: T) => U
];

export type FallbackPath<T = never, U = unknown> = [
    predicate: typeof PLACEHOLDER,
    callback: (value: T) => U
];

export type MatchPaths = MatchPath[];
export type MatchPathsWithFallback = [...MatchPath[], FallbackPath];

export type MatchPathInputValueType<
    T extends MatchPaths | MatchPathsWithFallback
> = T extends [
    infer Head extends MatchPath | FallbackPath,
    ...infer Tail extends MatchPaths | MatchPathsWithFallback
]
    ? Head extends MatchPath
        ?
              | Parameters<Head[0]>[0]
              | Parameters<Head[1]>[0]
              | MatchPathInputValueType<Tail>
        : Parameters<Head[1]>[0] | MatchPathInputValueType<Tail>
    : never;

export type MatchPathReturnValueType<
    T extends MatchPaths | MatchPathsWithFallback
> = T extends [
    infer Head extends MatchPath | FallbackPath,
    ...infer Tail extends MatchPaths | MatchPathsWithFallback
]
    ? ReturnType<Head[1]> | MatchPathReturnValueType<Tail>
    : never;
