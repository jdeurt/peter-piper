import type { AnyIterable } from "../../types/iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates an iterable containing only the first value of some input iterable or, if a predicate is provided, the first value to satisfy that predicate.
 * @behavior lazy
 * @example
 * using([1, 2, 3]).pipe(
 *     first((x) => x === 2)
 * );
 */
export const first =
    <T>(predicate?: (value: T, index: number) => MaybePromise<boolean>) =>
    (iterable: AnyIterable<T>) => {
        let index = 0;

        return {
            [Symbol.asyncIterator]: async function* () {
                for await (const value of toAsyncIterable<T>()(iterable)) {
                    if (predicate === undefined) {
                        yield value;
                        return;
                    }

                    if (await predicate(value, index++)) {
                        yield value;
                        return;
                    }
                }
            },
        } as AsyncIterable<T>;
    };
