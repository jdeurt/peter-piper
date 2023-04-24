import type {
    AnyIterable,
    AnySyncIterable,
    ArrayLikePredicate,
    AsyncArrayLikePredicate,
} from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../utils";

/**
 * Filters elements in an input iterable based on a given async predicate function.
 * Returns a new asynchronous iterable with elements that satisfy the predicate.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @param predicate - An async predicate function to test each element of the input iterable.
 * @returns A function that accepts an input iterable and returns a new asynchronous iterable with the filtered elements.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4];
 * const isEven = async (x: number) => x % 2 === 0;
 * const filteredIterable = filter<number>(isEven)(input);
 *
 * (async () => {
 *   for await (const x of filteredIterable) {
 *     console.log(x); // Logs 2, 4
 *   }
 * })();
 * ```
 */
export const filter = <T>(predicate: AsyncArrayLikePredicate<T>) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            let index = 0;

            for await (const value of input) {
                if (await predicate(value, index++)) {
                    yield value;
                }
            }
        })
    );

/**
 * Filters elements in an input sync iterable based on a given predicate function.
 * Returns a new sync iterable with elements that satisfy the predicate.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input sync iterable.
 * @param predicate - A predicate function to test each element of the input sync iterable.
 * @returns A function that accepts an input sync iterable and returns a new sync iterable with the filtered elements.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4];
 * const isEven = (x: number) => x % 2 === 0;
 * const filteredSyncIterable = filterSync<number>(isEven)(input);
 *
 * for (const x of filteredSyncIterable) {
 *   console.log(x); // Logs 2, 4
 * }
 * ```
 *
 * @remarks
 * Available as `filter` when imported from `peter-piper/sync`.
 */
export const filterSync = <T>(predicate: ArrayLikePredicate<T>) =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        iterable(function* () {
            let index = 0;

            for (const value of input) {
                if (predicate(value, index++)) {
                    yield value;
                }
            }
        })
    );
