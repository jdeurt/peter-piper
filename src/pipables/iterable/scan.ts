import type { AnyIterable } from "../../types/iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { NOTHING } from "../../constants/nothing.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Similar to `reduce` except returns an iterable with values corresponding to the result of each reduction step.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     scan((acc, x) => acc + x)
 * );
 */
export function scan<T, U = T>(
    callback: (accumulator: U, value: T, index: number) => MaybePromise<U>,
    initialValue?: U
) {
    return (iterable: AnyIterable<T>) => {
        let index = 0;
        let accumulator: U | typeof NOTHING =
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            arguments.length === 2 ? initialValue! : NOTHING;

        return {
            [Symbol.asyncIterator]: async function* () {
                for await (const value of toAsyncIterable<T>()(iterable)) {
                    if (accumulator === NOTHING) {
                        index++;
                        accumulator = value as unknown as U;

                        yield accumulator;

                        continue;
                    }

                    accumulator = await callback(accumulator, value, index++);

                    yield accumulator;
                }
            },
        } as AsyncIterable<U>;
    };
}
