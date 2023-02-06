import type { AnyIterable } from "../../types/any-iterable";
import type { MaybePromise } from "../../types/maybe-promise";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Fully consumes some input iterable while passing each value of the iterable to the provided callback function. The values returned from calling the callback function are returned as an array.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     consume((x) => x);
 * );
 *
 * @remarks
 * `consume` behaves almost identically to `map`, the main difference being that `consume` will greedily iterate through the input iterable.
 * Because of this, you must be careful not to pass an inifinite iterable as input unless you want `consume` to run forever.
 */
export const consume = <T, U>(callback?: (value: T) => MaybePromise<U>) =>
    withIterableAssertion(async (input: AnyIterable<T>): Promise<U[]> => {
        const results: U[] = [];

        for await (const value of input) {
            if (callback) {
                results.push(await callback(value));
            }
        }

        return results;
    });
