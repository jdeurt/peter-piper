import type {
    AnyIterable,
    AnySyncIterable,
    AsyncPredicate,
    Predicate,
} from "../../types";
import { asyncIterable, iterable, withIterableAssertion } from "../../util";

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

/**
 * A sync variant of {@link filter}.
 * @group Lazy helpers
 *
 * @remarks
 * Available as `filter` when imported from `peter-piper/sync`.
 */
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
