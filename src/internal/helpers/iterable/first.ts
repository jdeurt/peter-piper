import type {
    AnyIterable,
    ArrayLikePredicate,
    AsyncArrayLikePredicate,
} from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../utils";

/**
 * Yields the first element in an input iterable that satisfies an optional async predicate function.
 * If no predicate is provided, the first element in the iterable is yielded.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @param predicate - An optional async predicate function to test each element of the input iterable.
 * @returns A function that accepts an input iterable and returns a new asynchronous iterable.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4];
 * const isEven = async (x: number) => x % 2 === 0;
 * const firstIterable = first<number>(isEven)(input);
 *
 * (async () => {
 *   for await (const x of firstIterable) {
 *     console.log(x); // Logs 2
 *   }
 * })();
 * ```
 */
export const first = <T>(predicate?: AsyncArrayLikePredicate<T>) =>
    withIterableAssertion((input: AnyIterable<T>) => {
        let index = 0;

        return asyncIterable(async function* () {
            for await (const value of input) {
                if (predicate === undefined) {
                    yield value;
                    return;
                }

                if (await predicate(value, index++)) {
                    yield value;
                    return;
                }
            }
        });
    });

/**
 * Yields the first element in an input sync iterable that satisfies an optional predicate function.
 * If no predicate is provided, the first element in the iterable is yielded.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input sync iterable.
 * @param predicate - An optional predicate function to test each element of the input sync iterable.
 * @returns A function that accepts an input sync iterable and returns a new sync iterable.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4];
 * const isEven = (x: number) => x % 2 === 0;
 * const firstSyncIterable = firstSync<number>(isEven)(input);
 *
 * for (const x of firstSyncIterable) {
 *   console.log(x); // Logs 2
 * }
 * ```
 *
 * @remarks
 * Available as `first` when imported from `peter-piper/sync`.
 */
export const firstSync = <T>(predicate?: ArrayLikePredicate<T>) =>
    withIterableAssertion((input: Iterable<T>) => {
        let index = 0;

        return iterable(function* () {
            for (const value of input) {
                if (predicate === undefined) {
                    yield value;
                    return;
                }

                if (predicate(value, index++)) {
                    yield value;
                    return;
                }
            }
        });
    });
