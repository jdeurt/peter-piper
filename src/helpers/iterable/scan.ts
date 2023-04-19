import type {
    AnyIterable,
    AnySyncIterable,
    AsyncReducer,
    Reducer,
} from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../utils";
import { NOTHING } from "../../constants";

/**
 * Similar to {@link reduce} except returns an iterable with values corresponding to the result of each reduction step.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     scan((acc, x) => acc + x)
 * );
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
 * A sync variant of {@link scan}.
 * @group Lazy helpers
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
