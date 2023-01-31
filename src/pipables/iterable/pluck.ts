import type { AnyIterable } from "../../types/iterable.js";
import type { Traverse } from "../../types/traverse.js";
import { pick } from "../object/pick.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates a new iterable which's values are the properties of the values of some input iterable at the provided path.
 */
export const pluck =
    <P extends string[]>(...path: P) =>
    <T>(iterable: Iterable<T>) =>
        ({
            [Symbol.iterator]: function* () {
                for (const value of iterable) {
                    yield pick(...path)(value);
                }
            },
        } as Iterable<Traverse<T, P>>);

/**
 * Creates a new async iterable which's values are the properties of the values of some input iterable at the provided path.
 */
export const pluckAsync =
    <P extends string[]>(...path: P) =>
    <T>(iterable: AnyIterable<T>) =>
        ({
            [Symbol.asyncIterator]: async function* () {
                for await (const value of toAsyncIterable<T>()(iterable)) {
                    yield pick(...path)(value);
                }
            },
        } as AsyncIterable<Traverse<T, P>>);
