import type { AnyIterable } from "../../types/any-iterable";
import { asyncIterable } from "../../util/iterable-factory";

/**
 * Creates a new iterable consiting of only values of some input iterable yielded `ms` milliseconds apart.
 * @group Lazy helpers
 * @example
 * using(someAsyncGenerator()).pipe(
 *     throttle(2000) // 2 seconds
 * );
 *
 * @remarks
 * Due to the nature of this helper, it does not have a sync variant.
 */
export const throttle = <T>(ms: number) => {
    let lastPass = Number.NEGATIVE_INFINITY;

    return (input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            for await (const value of input) {
                const now = Date.now();

                if (now > lastPass + ms) {
                    lastPass = now;

                    yield value;
                }
            }
        });
};
