import type { AnyIterable } from "../../types/iterable.js";
import type { MaybePromise } from "../../types/maybe-promise.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates a new iterable containing all values of some input iterable that satisfy the provided predicate.
 * @group Lazy helpers
 * @example
 * using([1, 0, 0, 1, 0]).pipe(
 *     filter((x) => x === 1);
 * );
 */
export const filter =
    <T>(predicate: (value: T, index: number) => MaybePromise<boolean>) =>
    (iterable: AnyIterable<T>) =>
        ({
            [Symbol.asyncIterator]: async function* () {
                let index = 0;

                for await (const value of toAsyncIterable<T>()(iterable)) {
                    if (await predicate(value, index++)) {
                        yield value;
                    }
                }
            },
        } as AsyncIterable<T>);
