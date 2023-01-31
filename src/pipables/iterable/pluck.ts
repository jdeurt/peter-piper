import type { Traverse } from "../../types/traverse.js";
import { pick } from "../object/pick.js";

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
