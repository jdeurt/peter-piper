import type {
    AnyIterable,
    AnySyncIterable,
    AsyncReducer,
    Reducer,
} from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../utils";
import { NOTHING } from "../../constants";

/**
 * Reduces an input iterable to a sequence of accumulated values using an asynchronous reducer function.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input iterable.
 * @template U - The type of the output value. Defaults to `T`.
 * @param reducer - An asynchronous reducer function that takes the accumulator, a value, and its index.
 * @param initialValue - Optional. The initial value of the accumulator. If not provided, the first value of the iterable is used.
 * @returns A function that accepts an input iterable and returns an async iterable that yields accumulated values.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const add = async (acc: number, value: number) => acc + value;
 * const scanSum = scan(add)(input);
 *
 * (async () => {
 *   for await (const value of scanSum) {
 *     console.log(value); // Logs 1, 3, 6
 *   }
 * })();
 * ```
 */
export function scan<T, U = T>(reducer: AsyncReducer<T, U>, initialValue?: U) {
    return withIterableAssertion((input: AnyIterable<T>) => {
        let index = 0;
        let accumulator: U | typeof NOTHING =
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            arguments.length === 2 ? initialValue! : NOTHING;

        return asyncIterable(async function* () {
            for await (const value of input) {
                if (accumulator === NOTHING) {
                    index++;
                    accumulator = value as unknown as U;

                    yield accumulator;

                    continue;
                }

                accumulator = await reducer(accumulator, value, index++);

                yield accumulator;
            }
        });
    });
}

/**
 * Reduces an input sync iterable to a sequence of accumulated values using a reducer function.
 *
 * @group Lazy helpers
 * @template T - The type of elements in the input sync iterable.
 * @template U - The type of the output value. Defaults to `T`.
 * @param reducer - A reducer function that takes the accumulator, a value, and its index.
 * @param initialValue - Optional. The initial value of the accumulator. If not provided, the first value of the iterable is used.
 * @returns A function that accepts an input sync iterable and returns an iterable that yields accumulated values.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3];
 * const add = (acc: number, value: number) => acc + value;
 * const scanSumSync = scanSync(add)(input);
 *
 * for (const value of scanSumSync) {
 *   console.log(value); // Logs 1, 3, 6
 * }
 * ```
 *
 * @remarks
 * Available as `scan` when imported from `peter-piper/sync`.
 */
export function scanSync<T, U = T>(reducer: Reducer<T, U>, initialValue?: U) {
    return withIterableAssertion((input: AnySyncIterable<T>) => {
        let index = 0;
        let accumulator: U | typeof NOTHING =
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            arguments.length === 2 ? initialValue! : NOTHING;

        return iterable(function* () {
            for (const value of input) {
                if (accumulator === NOTHING) {
                    index++;
                    accumulator = value as unknown as U;

                    yield accumulator;

                    continue;
                }

                accumulator = reducer(accumulator, value, index++);

                yield accumulator;
            }
        });
    });
}
