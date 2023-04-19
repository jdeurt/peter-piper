import {
    asyncIterable,
    toAsyncIterable,
    withIterableAssertion,
} from "../../utils";
import type { AnyIterable } from "../../types";

/**
 * Maps some input iterable to an equivalent async iterable.
 * @group Lazy helpers
 * @example
 * using(someSyncGenerator()).pipe(
 *     async()
 * );
 */
export const async = <T>() =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            for await (const x of toAsyncIterable(input)) {
                yield x;
            }
        })
    );
