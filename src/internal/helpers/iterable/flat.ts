import {
    asyncIterable,
    isIterable,
    isSyncIterable,
    iterable,
    toAsyncIterable,
    withIterableAssertion,
} from "../../utils";
import type { AnyIterable } from "../../types";
import type {
    FlatAsyncIterable,
    FlatIterable,
} from "../../types/iterable/flat-iterable";
import { getIterator } from "../../utils/iterable/get-iterator";

/**
 * Flattens an input iterable up to a specified depth.
 * Returns a new asynchronous iterable.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @template D - The depth of flattening.
 * @param depth - The depth of flattening, defaults to 1.
 * @returns A function that accepts an input iterable and returns a new asynchronous iterable.
 *
 * @example
 * ```ts
 * const input = [1, [2, 3], [4, [5]]];
 * const flatIterable = flat<number>(1)(input);
 *
 * (async () => {
 *   for await (const x of flatIterable) {
 *     console.log(x); // Logs 1, 2, 3, 4, [5]
 *   }
 * })();
 * ```
 */
export const flat = <T, D extends number = 1>(depth?: D) =>
    withIterableAssertion(
        (input: AnyIterable<T>): FlatAsyncIterable<T, D> =>
            asyncIterable(async function* () {
                const iterator = getIterator(input);

                depth = depth ?? (1 as D);

                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                while (true) {
                    const nextResult = await iterator.next();

                    if (nextResult.done) {
                        return;
                    }

                    if (depth === 0) {
                        yield nextResult.value;
                    } else if (isIterable(nextResult.value)) {
                        yield* toAsyncIterable(
                            flat((depth - 1) as D)(
                                nextResult.value
                            ) as AnyIterable<T>
                        );
                    } else {
                        yield nextResult.value;
                    }
                }
            }) as FlatAsyncIterable<T, D>
    );

/**
 * Flattens an input sync iterable up to a specified depth.
 * Returns a new synchronous iterable.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input sync iterable.
 * @template D - The depth of flattening.
 * @param depth - The depth of flattening, defaults to 1.
 * @returns A function that accepts an input sync iterable and returns a new synchronous iterable.
 *
 * @example
 * ```ts
 * const input = [1, [2, 3], [4, [5]]];
 * const flatSyncIterable = flatSync<number>(1)(input);
 *
 * for (const x of flatSyncIterable) {
 *   console.log(x); // Logs 1, 2, 3, 4, [5]
 * }
 * ```
 *
 * @remarks
 * Available as `flat` when imported from `peter-piper/sync`.
 */
export const flatSync = <T, D extends number = 1>(depth?: D) =>
    withIterableAssertion(
        (input: Iterable<T>): FlatIterable<T, D> =>
            iterable(function* () {
                const iterator = getIterator(input);

                depth = depth ?? (1 as D);

                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                while (true) {
                    const nextResult = iterator.next();

                    if (nextResult.done) {
                        return;
                    }

                    if (depth === 0) {
                        yield nextResult.value;
                    } else if (isSyncIterable(nextResult.value)) {
                        yield* flatSync((depth - 1) as D)(
                            nextResult.value
                        ) as Iterable<T>;
                    } else {
                        yield nextResult.value;
                    }
                }
            }) as FlatIterable<T, D>
    );
