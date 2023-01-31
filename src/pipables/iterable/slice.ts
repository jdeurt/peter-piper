import type { AnyIterable } from "../../types/iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";

/**
 * Creates a new iterable by slicing some input iterable from the provided start index (inclusive) to the provided end index (exclusive).
 * If no end index is provided, `Number.POSITIVE_INFINITY` is used instead.
 */
export const slice =
    <T>(startIndex: number, endIndex = Number.POSITIVE_INFINITY) =>
    (iterable: Iterable<T>) =>
        ({
            [Symbol.iterator]: function* () {
                let index = 0;

                for (const value of iterable) {
                    if (index === endIndex) {
                        return;
                    }

                    if (index >= startIndex) {
                        yield value;
                    }

                    index++;
                }
            },
        } as Iterable<T>);

/**
 * Creates a new async iterable by slicing some input iterable from the provided start index (inclusive) to the provided end index (exclusive).
 * If no end index is provided, `Number.POSITIVE_INFINITY` is used instead.
 */
export const sliceAsync =
    <T>(startIndex: number, endIndex = Number.POSITIVE_INFINITY) =>
    (iterable: AnyIterable<T>) =>
        ({
            [Symbol.asyncIterator]: async function* () {
                let index = 0;

                for await (const value of toAsyncIterable<T>()(iterable)) {
                    if (index === endIndex) {
                        return;
                    }

                    if (index >= startIndex) {
                        yield value;
                    }

                    index++;
                }
            },
        } as AsyncIterable<T>);
