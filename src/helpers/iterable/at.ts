import type { AnyIterable, AnySyncIterable } from "../../types";
import {
    atGreedy,
    atGreedySync,
    atLazy,
    atLazySync,
    withIterableAssertion,
} from "../../utils";

/**
 * Returns the nth element of some iterable.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     at(1)
 * );
 */
export const at = <T>(n: number) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        n >= 0 ? atLazy(input, n) : atGreedy(input, n)
    );

/**
 * A sync variant of {@link at}.
 * @group Greedy helpers
 *
 * @remarks
 * Available as `at` when imported from `peter-piper/sync`.
 */
export const atSync = <T>(n: number) =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        n >= 0 ? atLazySync(input, n) : atGreedySync(input, n)
    );
