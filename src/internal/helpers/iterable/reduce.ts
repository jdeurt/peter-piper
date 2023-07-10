import type { AnyIterable, AsyncReducer, Reducer } from "../../types";
import { NOTHING } from "../../constants";
import { withIterableAssertion } from "../../utils";

/**
 * Reduces an input iterable to a single value using an asynchronous reducer function.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input iterable.
 * @template U - The type of the output value. Defaults to `T`.
 * @param reducer - An asynchronous reducer function that takes the accumulator, a value, and its index.
 * @param initialValue - Optional. The initial value of the accumulator. If not provided, the first value of the iterable is used.
 * @returns A function that accepts an input iterable and returns a Promise that resolves to the reduced value.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const add = async (acc: number, value: number) => acc + value;
 * const sum = reduce(add)(input);
 *
 * (async () => {
 *   console.log(await sum); // Logs 6
 * })();
 * ```
 */
export function reduce<T, U = T>(
    reducer: AsyncReducer<T, U>,
    initialValue?: U
) {
    return withIterableAssertion(async (input: AnyIterable<T>): Promise<U> => {
        let index = 0;
        let accumulator: U | typeof NOTHING =
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            arguments.length === 2 ? initialValue! : NOTHING;

        for await (const value of input) {
            if (accumulator === NOTHING) {
                index++;
                accumulator = value as unknown as U;

                continue;
            }

            accumulator = await reducer(accumulator, value, index++);
        }

        if (accumulator === NOTHING) {
            throw new TypeError(
                "Reduce of empty iterable with no initial value"
            );
        }

        return accumulator;
    });
}

/**
 * Reduces an input sync iterable to a single value using a reducer function.
 *
 * @group Greedy helpers
 * @template T - The type of elements in the input sync iterable.
 * @template U - The type of the output value. Defaults to `T`.
 * @param reducer - A reducer function that takes the accumulator, a value, and its index.
 * @param initialValue - Optional. The initial value of the accumulator. If not provided, the first value of the iterable is used.
 * @returns A function that accepts an input sync iterable and returns the reduced value.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const add = (acc: number, value: number) => acc + value;
 * const sumSync = reduceSync(add)(input);
 *
 * console.log(sumSync); // Logs 6
 * ```
 *
 * @remarks
 * Available as `reduce` when imported from `peter-piper/sync`.
 */
export function reduceSync<T, U = T>(reducer: Reducer<T, U>, initialValue?: U) {
    return withIterableAssertion((input: Iterable<T>): U => {
        let index = 0;
        let accumulator: U | typeof NOTHING =
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            arguments.length === 2 ? initialValue! : NOTHING;

        for (const value of input) {
            if (accumulator === NOTHING) {
                index++;
                accumulator = value as unknown as U;

                continue;
            }

            accumulator = reducer(accumulator, value, index++);
        }

        if (accumulator === NOTHING) {
            throw new TypeError(
                "Reduce of empty iterable with no initial value"
            );
        }

        return accumulator;
    });
}
