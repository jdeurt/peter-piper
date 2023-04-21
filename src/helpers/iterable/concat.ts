import type { AnyIterable, AnySyncIterable } from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../utils";

/**
 * Concatenates multiple input iterables into a single asynchronous iterable.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterables.
 * @param iterables - The iterables to concatenate.
 * @returns A function that accepts an input iterable and returns a concatenated asynchronous iterable.
 *
 * @example
 * ```ts
 * const input1 = [1, 2, 3];
 * const input2 = [4, 5, 6];
 * const concatenatedIterable = concat<number>(input2)(input1);
 *
 * (async () => {
 *   for await (const x of concatenatedIterable) {
 *     console.log(x); // Logs 1, 2, 3, 4, 5, 6
 *   }
 * })();
 * ```
 */
export const concat = <T>(...iterables: AnyIterable<T>[]) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            for (const iter of [input, ...iterables]) {
                yield* iter;
            }
        })
    );

/**
 * Concatenates multiple input sync iterables into a single sync iterable.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input sync iterables.
 * @param iterables - The sync iterables to concatenate.
 * @returns A function that accepts an input sync iterable and returns a concatenated sync iterable.
 *
 * @example
 * ```ts
 * const input1 = [1, 2, 3];
 * const input2 = [4, 5, 6];
 * const concatenatedSyncIterable = concatSync<number>(input2)(input1);
 *
 * for (const x of concatenatedSyncIterable) {
 *   console.log(x); // Logs 1, 2, 3, 4, 5, 6
 * }
 * ```
 *
 * @remarks
 * Available as `concat` when imported from `peter-piper/sync`.
 */
export const concatSync = <T>(...iterables: AnySyncIterable<T>[]) =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        iterable(function* () {
            for (const iter of [input, ...iterables]) {
                yield* iter;
            }
        })
    );
