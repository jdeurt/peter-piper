import type { AnyIterable, AnySyncIterable } from "../../types";
import { withIterableAssertion } from "../../util";

/**
 * Creates a new array from the values of some input iterable.
 * @group Greedy helpers
 * @example
 * using(new Set([1, 2, 3])).pipe(
 *     toArray()
 * );
 */
export const toArray = <T>() =>
    withIterableAssertion(async (input: AnyIterable<T>): Promise<T[]> => {
        const result: T[] = [];

        for await (const value of input) {
            result.push(value);
        }

        return result;
    });

export const toArraySync = <T>() =>
    withIterableAssertion((input: AnySyncIterable<T>): T[] => {
        const result: T[] = [];

        for (const value of input) {
            result.push(value);
        }

        return result;
    });
