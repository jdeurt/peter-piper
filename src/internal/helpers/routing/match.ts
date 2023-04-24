import type {
    MatchPathInputValueType,
    MatchPathReturnValueType,
    MatchPaths,
    MatchPathsWithFallback,
} from "../../types";
import { __ } from "../../constants/placeholder";

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

            if (predicate === __ || (await predicate(input))) {
                return callback(input) as MatchPathReturnValueType<T>;
            }
        }

        return undefined as T extends MatchPaths
            ? MatchPathReturnValueType<T> | undefined
            : MatchPathReturnValueType<T>;
    };
