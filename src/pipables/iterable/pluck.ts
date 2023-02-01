import type { AnyIterable } from "../../types/iterable.js";
import type { Traverse } from "../../types/traverse.js";
import { pick } from "../object/pick.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates a new iterable which's values are the properties of the values of some input iterable at the provided path.
 * @group Lazy helpers
 * @example
 * using([{ a: 1 }, { a: 2 }]).pipe(
 *     pluck("a")
 * );
 */
export const pluck =
    <P extends string[]>(...path: P) =>
    <T>(iterable: AnyIterable<T>) =>
        ({
            [Symbol.asyncIterator]: async function* () {
                for await (const value of toAsyncIterable<T>()(iterable)) {
                    yield pick(...path)(value);
                }
            },
        } as AsyncIterable<Traverse<T, P>>);
