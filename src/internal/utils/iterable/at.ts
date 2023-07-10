import { toArray, toArraySync } from "./to-array";
import type { AnyIterable } from "../../types";

export const atLazy = async <T>(input: AnyIterable<T>, index: number) => {
    let currIndex = 0;

    for await (const value of input) {
        if (currIndex === index) {
            return value;
        }

        currIndex++;
    }
};

/**
 * Supports negative indeces.
 */
export const atGreedy = async <T>(input: AnyIterable<T>, index: number) =>
    toArray(input).then((arr) => arr.at(index));

export const atLazySync = <T>(input: Iterable<T>, index: number) => {
    let currIndex = 0;

    for (const value of input) {
        if (currIndex === index) {
            return value;
        }

        currIndex++;
    }
};

/**
 * Supports negative end indeces.
 */
export const atGreedySync = <T>(input: Iterable<T>, index: number) =>
    toArraySync(input).at(index);
