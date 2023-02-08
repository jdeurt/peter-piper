import type {
    AnyIterable,
    AnySyncIterable,
    AsyncPredicate,
    Predicate,
} from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../util";

/**
 * Creates an iterable containing only the first value of some input iterable or, if a predicate is provided, the first value to satisfy that predicate.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     first((x) => x === 2)
 * );
 */
export const first = <T>(predicate?: AsyncPredicate<T>) =>
    withIterableAssertion((input: AnyIterable<T>) => {
        let index = 0;

        return asyncIterable(async function* () {
            for await (const value of input) {
                if (predicate === undefined) {
                    yield value;
                    return;
                }

                if (await predicate(value, index++)) {
                    yield value;
                    return;
                }
            }
        });
    });

export const firstSync = <T>(predicate?: Predicate<T>) =>
    withIterableAssertion((input: AnySyncIterable<T>) => {
        let index = 0;

        return iterable(function* () {
            for (const value of input) {
                if (predicate === undefined) {
                    yield value;
                    return;
                }

                if (predicate(value, index++)) {
                    yield value;
                    return;
                }
            }
        });
    });
