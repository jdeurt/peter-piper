import type { MaybePromise } from "../../types/maybe-promise.js";

type MatchPath<T = never, U = unknown> = [
    predicate: (value: T) => MaybePromise<boolean>,
    callback: (value: T) => U
];

type FallbackPath<T = never, U = unknown> = [callback: (value: T) => U];

type MatchPathInputValueType<
    T extends MatchPath[] | [...MatchPath[], FallbackPath]
> = T extends [
    infer Head extends MatchPath | FallbackPath,
    ...infer Tail extends MatchPath[] | [...MatchPath[], FallbackPath]
]
    ? Head extends MatchPath
        ?
              | Parameters<Head[0]>[0]
              | Parameters<Head[1]>[0]
              | MatchPathInputValueType<Tail>
        : Parameters<Head[0]>[0] | MatchPathInputValueType<Tail>
    : never;

type MatchPathReturnValueType<
    T extends MatchPath[] | [...MatchPath[], FallbackPath]
> = T extends [
    infer Head extends MatchPath | FallbackPath,
    ...infer Tail extends MatchPath[] | [...MatchPath[], FallbackPath]
]
    ? Head extends MatchPath
        ? ReturnType<Head[1]> | MatchPathReturnValueType<Tail>
        : ReturnType<Head[0]> | MatchPathReturnValueType<Tail>
    : never;

/**
 * Finds the first path pair where some input value satisfies that pair's predicate and returns the result of passing said input value to that pair's callback function.
 * @group Greedy helpers
 * @example
 * using(1).pipe(
 *     match(
 *         [equals(0), (x) => x + 1],
 *         [equals(1), (x) => x - 1]
 *     )
 * );
 */
export const match =
    <T extends MatchPath[] | [...MatchPath[], FallbackPath]>(...paths: T) =>
    async (input: MatchPathInputValueType<T>) => {
        for (const path of paths) {
            const predicate = path.length === 2 ? path[0] : undefined;
            const callback = path.length === 2 ? path[1] : path[0];

            if ((await predicate?.(input)) ?? true) {
                return callback(input) as MatchPathReturnValueType<T>;
            }
        }

        return (paths[paths.length - 1] as FallbackPath)[0](
            input
        ) as MatchPathReturnValueType<T>;
    };
