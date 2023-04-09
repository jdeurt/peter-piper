import type { AnyIterable } from "../../types";
import { asyncIterable } from "../../util";

/**
 * Creates a new iterable consiting of values of some input iterable with a `ms` millisecond buffer between them.
 * @group Lazy helpers
 * @example
 * using(someAsyncGenerator()).pipe(
 *     buffer(2000) // 2 seconds
 * );
 *
 * @remarks
 * Due to the nature of this helper, it does not have a sync variant.
 */
export const buffer = <T>(ms: number) => {
    let lastPass = Number.NEGATIVE_INFINITY;

    return (input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            for await (const value of input) {
                const now = Date.now();

                if (now > lastPass + ms) {
                    lastPass = now;

                    yield value;
                } else {
                    await new Promise((resolve) => setTimeout(resolve, ms));

                    yield value;

                    lastPass = Date.now();
                }
            }
        });
};
