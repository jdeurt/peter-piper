import type { AnyIterable } from "../../types";

export const toArray = async <T>(input: AnyIterable<T>) => {
    const result: T[] = [];

    for await (const value of input) {
        result.push(value);
    }

    return result;
};

export const toArraySync = <T>(input: Iterable<T>) => {
    const result: T[] = [];

    for (const value of input) {
        result.push(value);
    }

    return result;
};
