import type {
    AnyIterable,
    AnySyncIterable,
    MaybePromise,
    Reducer,
} from "../../types";
import { NOTHING } from "../../constants/nothing";
import { withIterableAssertion } from "../../util";

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
    reducer: Reducer<T, MaybePromise<U>>,
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
 * A sync variant of {@link reduce}.
 * @group Lazy helpers
 *
 * @remarks
 * Available as `reduce` when imported from `peter-piper/sync`.
 */
export function reduceSync<T, U = T>(reducer: Reducer<T, U>, initialValue?: U) {
    return withIterableAssertion((input: AnySyncIterable<T>): U => {
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
