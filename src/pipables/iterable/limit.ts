import type { AnyIterable } from "../../types/iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates a new iterable containing only the first `x` values of some input iterable.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     limit(2)
 * );
 */
export const limit =
    <T>(x: number) =>
    (iterable: AnyIterable<T>) =>
        ({
            [Symbol.asyncIterator]: async function* () {
                let index = 0;

                for await (const value of toAsyncIterable<T>()(iterable)) {
                    if (index === x) {
                        return;
                    }

                    yield value;

                    index++;
                }
            },
        } as AsyncIterable<T>);
