import { fc } from "@fast-check/ava";

export const map = <T, U>(
    arb: [fc.Arbitrary<T>, fc.Arbitrary<U>],
    constraints?: fc.ArrayConstraints
) => fc.array(fc.tuple(...arb), constraints).map((t) => new Map(t));
