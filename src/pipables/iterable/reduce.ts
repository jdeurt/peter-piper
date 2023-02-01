import type { AnyIterable } from "../../types/iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { NOTHING } from "../../constants/nothing.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Reduces some input iterable to a value using the provided callback function.
 * If no initial value is provided, the accumulator starts as the first value of the input iterable and the reducer is ran on the rest of the iterable's values.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     reduce((acc, x) => acc + x)
 * );
 */
export function reduce<T, U = T>(
    callback: (accumulator: U, value: T, index: number) => MaybePromise<U>,
    initialValue?: U
) {
    return async (iterable: AnyIterable<T>) => {
        let index = 0;
        let accumulator: U | typeof NOTHING =
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            arguments.length === 2 ? initialValue! : NOTHING;

        for await (const value of toAsyncIterable<T>()(iterable)) {
            if (accumulator === NOTHING) {
                index++;
                accumulator = value as unknown as U;

                continue;
            }

            accumulator = await callback(accumulator, value, index++);
        }

        if (accumulator === NOTHING) {
            throw new TypeError(
                "Reduce of empty iterable with no initial value"
            );
        }

        return accumulator;
    };
}
