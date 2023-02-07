import type { AnyIterable, AnySyncIterable } from "../../types/any-iterable";
import { asyncIterable, iterable } from "../../util/iterable-factory";
import type { MapFn } from "../../types/map-fn";
import { withIterableAssertion } from "../../util/type-assertions/assert-iterable";

/**
 * Creates a new iterable which's values are the result of mapping some input iterable using the provided callback function.
 * @group Lazy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     map((x) => x * 2)
 * );
 */
export const map = <T, U>(mapFn: MapFn<T, U>) =>
    withIterableAssertion((input: AnyIterable<T>) => {
        let index = 0;

        return asyncIterable(async function* () {
            for await (const value of input) {
                yield mapFn(value, index++);
            }
        });
    });

export const mapSync = <T, U>(mapFn: MapFn<T, U>) =>
    withIterableAssertion((input: AnySyncIterable<T>) => {
        let index = 0;

        return iterable(function* () {
            for (const value of input) {
                yield mapFn(value, index++);
            }
        });
    });
