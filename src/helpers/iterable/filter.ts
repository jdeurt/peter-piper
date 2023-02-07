import type { AnyIterable, AnySyncIterable } from "../../types/any-iterable";
import type { AsyncPredicate, Predicate } from "../../types/predicate";
import { asyncIterable, iterable } from "../../util/iterable-factory";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates a new iterable containing all values of some input iterable that satisfy the provided predicate.
 * @group Lazy helpers
 * @example
 * using([1, 0, 0, 1, 0]).pipe(
 *     filter((x) => x === 1)
 * );
 */
export const filter = <T>(predicate: AsyncPredicate<T>) =>
    withIterableAssertion((input: AnyIterable<T>) =>
        asyncIterable(async function* () {
            let index = 0;

            for await (const value of input) {
                if (await predicate(value, index++)) {
                    yield value;
                }
            }
        })
    );

export const filterSync = <T>(predicate: Predicate<T>) =>
    withIterableAssertion((input: AnySyncIterable<T>) =>
        iterable(function* () {
            let index = 0;

            for (const value of input) {
                if (predicate(value, index++)) {
                    yield value;
                }
            }
        })
    );
