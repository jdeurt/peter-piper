import { testProp, fc } from "@fast-check/ava";

import { randomFloats, randomInts } from "../../../src";
import { xIterable } from "../../../src/internal/utils";

testProp(
    "should produce an iterable of random floats",
    [
        fc.float({ min: 0, max: 500 }).filter((t) => !Number.isNaN(t)),
        fc.float({ min: 0, max: 500 }).filter((t) => !Number.isNaN(t)),
    ],
    (t, i, j) => {
        const from = Math.min(i, j);
        const to = Math.max(i, j);

        for (const n of xIterable(randomFloats()[Symbol.iterator]).take(100)) {
            t.true(0 <= n && n <= 1);
        }

        for (const n of xIterable(
            randomFloats([from, to])[Symbol.iterator]
        ).take(100)) {
            t.true(from <= n && n <= to);
        }
    }
);

testProp(
    "should produce an iterable of random integers",
    [fc.nat(500), fc.nat(500)],
    (t, i, j) => {
        const from = Math.min(i, j);
        const to = Math.max(i, j);

        for (const n of xIterable(randomInts([from, to])[Symbol.iterator]).take(
            100
        )) {
            t.true(from <= n && n <= to);
            t.true(Math.floor(n) === n);
        }
    }
);
