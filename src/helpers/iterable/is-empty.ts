import type { AnyIterable, AnySyncIterable } from "../../types";
import { toAsyncIterable, withIterableAssertion } from "../../utils";

/**
 * Checks if an input iterable is empty.
 * Returns a promise that resolves to a boolean value.
 *
 * @group Greedy helpers
 * @returns A function that accepts an input iterable and returns a promise that resolves to a boolean value.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const empty = isEmpty()(input);
 *
 * (async () => {
 *   console.log(await empty); // Logs false
 * })();
 * ```
 */
export const isEmpty = () =>
    withIterableAssertion(
        (input: AnyIterable<unknown>): Promise<boolean> =>
            toAsyncIterable(input)
                [Symbol.asyncIterator]()
                .next()
                .then(({ done }) => Boolean(done))
    );

/**
 * Checks if an input sync iterable is empty.
 * Returns a boolean value.
 *
 * @group Greedy helpers
 * @returns A function that accepts an input sync iterable and returns a boolean value.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const empty = isEmptySync()(input);
 * console.log(empty); // Logs false
 * ```
 *
 * @remarks
 * Available as `isEmpty` when imported from `peter-piper/sync`.
 */
export const isEmptySync = () =>
    withIterableAssertion((input: AnySyncIterable<unknown>): boolean =>
        Boolean(input[Symbol.iterator]().next().done)
    );
