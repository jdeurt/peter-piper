import type { AnyIterable, AnySyncIterable } from "../../types";

export const toArray = async <T>(input: AnyIterable<T>) => {
    const result: T[] = [];

    for await (const value of input) {
        result.push(value);
    }

    return result;
};

export const toArraySync = <T>(input: AnySyncIterable<T>) => {
    const result: T[] = [];

    for (const value of input) {
        result.push(value);
    }

    return result;
};
