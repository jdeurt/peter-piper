import { fc } from "@fast-check/ava";

export const set = <T>(
    arb: fc.Arbitrary<T>,
    constraints?: fc.ArrayConstraints
) => fc.array(arb, constraints).map((t) => new Set(t));
