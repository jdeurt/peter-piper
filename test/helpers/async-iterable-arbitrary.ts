import { fc } from "@fast-check/ava";

export const asyncIterable = <T>(
    arb: fc.Arbitrary<T>,
    constraints?: fc.ArrayConstraints
) =>
    fc.array(arb, constraints).map((t) => ({
        [Symbol.asyncIterator]() {
            let i = 0;
            return {
                next() {
                    return i < t.length
                        ? Promise.resolve({ value: t[i++], done: false })
                        : Promise.resolve({ value: undefined, done: true });
                },
            };
        },
    })) as fc.Arbitrary<AsyncIterable<T>>;
