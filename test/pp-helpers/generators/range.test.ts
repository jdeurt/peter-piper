import { testProp, fc } from "@fast-check/ava";

import { range } from "../../../src";

testProp(
    "should produce a ranged iterable",
    [fc.nat(100), fc.nat(500)],
    (t, from, to) => {
        let i = from;

        for (const n of range([from, to])) {
            t.is(n, i++);
        }

        t.true(i > to);
    }
);
