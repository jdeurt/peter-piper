import { asyncIterable, iterable } from "../iterable-factory";
import { toArray, toArraySync } from "./to-array";
import type { AnyIterable } from "../../types";

export const sliceLazy = <T>(
    input: AnyIterable<T>,
    startIndex = 0,
    endIndex = Number.POSITIVE_INFINITY
) =>
    asyncIterable(async function* () {
        let index = 0;

        for await (const value of input) {
            if (index === endIndex) {
                return;
            }

            if (index >= startIndex) {
                yield value;
            }

            index++;
        }
    });

/**
 * Supports negative end indexes.
 */
export const sliceGreedy = <T>(
    input: AnyIterable<T>,
    startIndex = 0,
    endIndex = Number.POSITIVE_INFINITY
) =>
    asyncIterable(async function* () {
        const acc = await toArray(input);

        for await (const value of acc.slice(startIndex, endIndex)) {
            yield value;
        }
    });

export const sliceLazySync = <T>(
    input: Iterable<T>,
    startIndex = 0,
    endIndex = Number.POSITIVE_INFINITY
) =>
    iterable(function* () {
        let index = 0;

        for (const value of input) {
            if (index === endIndex) {
                return;
            }

            if (index >= startIndex) {
                yield value;
            }

            index++;
        }
    });

/**
 * Supports negative end indexes.
 */
export const sliceGreedySync = <T>(
    input: Iterable<T>,
    startIndex = 0,
    endIndex = Number.POSITIVE_INFINITY
) =>
    iterable(function* () {
        const acc = toArraySync(input);

        for (const value of acc.slice(startIndex, endIndex)) {
            yield value;
        }
    });
