import type { AnyIterable } from "../../types/any-iterable";
import type { MaybePromise } from "../../types/maybe-promise";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Retrieves the first value of some input iterable that satisfies the provided predicate.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     find((x) => x === 2)
 * );
 */
export const find = <T>(
    predicate: (value: T, index: number) => MaybePromise<boolean>
) =>
    withIterableAssertion(
        async (input: AnyIterable<T>): Promise<T | undefined> => {
            let index = 0;

            for await (const value of input) {
                if (await predicate(value, index++)) {
                    return value;
                }
            }
        }
    );

export const findSync = <T>(predicate: (value: T, index: number) => boolean) =>
    withIterableAssertion((input: Iterable<T>): T | undefined => {
        let index = 0;

        for (const value of input) {
            if (predicate(value, index++)) {
                return value;
            }
        }
    });
