import type { MaybePromise } from "../../types/maybe-promise";
import { PLACEHOLDER } from "../../constants/placeholder";

type MatchPath<T = never, U = unknown> = [
    predicate: (value: T) => MaybePromise<boolean>,
    callback: (value: T) => U
];

type FallbackPath<T = never, U = unknown> = [
    predicate: typeof PLACEHOLDER,
    callback: (value: T) => U
];

type MatchPaths = MatchPath[];
type MatchPathsWithFallback = [...MatchPath[], FallbackPath];

type MatchPathInputValueType<T extends MatchPaths | MatchPathsWithFallback> =
    T extends [
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

type MatchPathReturnValueType<T extends MatchPaths | MatchPathsWithFallback> =
    T extends [
        infer Head extends MatchPath | FallbackPath,
        ...infer Tail extends MatchPaths | MatchPathsWithFallback
    ]
        ? ReturnType<Head[1]> | MatchPathReturnValueType<Tail>
        : never;

/**
 * Finds the first path pair where some input value satisfies that pair's predicate and returns the result of passing said input value to that pair's callback function. If a placeholder (`__`) is used in place of a predicate in the last path, that path will act as a fallback path.
 * @group Greedy helpers
 * @example
 * using(1).pipe(
 *     match(
 *         [equals(0), (x) => x + 1],
 *         [equals(1), (x) => x - 1]
 *     )
 * );
 *
 * // with placeholder
 * using(1).pipe(
 *     match(
 *         [equals(0), (x) => x + 1],
 *         [__, (x) => x - 1]
 *     )
 * );
 */
export const match =
    <T extends MatchPaths | MatchPathsWithFallback>(...paths: T) =>
    async (
        input: MatchPathInputValueType<T>
    ): Promise<
        T extends MatchPaths
            ? MatchPathReturnValueType<T> | undefined
            : MatchPathReturnValueType<T>
    > => {
        for (const path of paths) {
            const [predicate, callback] = path;

            if (predicate === PLACEHOLDER || (await predicate(input))) {
                return callback(input) as MatchPathReturnValueType<T>;
            }
        }

        return undefined as T extends MatchPaths
            ? MatchPathReturnValueType<T> | undefined
            : MatchPathReturnValueType<T>;
    };
