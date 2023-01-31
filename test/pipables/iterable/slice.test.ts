import { testProp, fc } from "@fast-check/ava";

import { slice } from "../../../src/index.js";

testProp(
    "should slice out a chunk of an iterable",
    [
        fc.array(fc.anything()),
        fc.integer({ min: 0 }),
        fc.integer({ min: -1 }).map((x) => (x === -1 ? undefined : x)),
    ],
    (t, arr, from, to) =>
        t.deepEqual([...slice(from, to)(arr)], arr.slice(from, to))
);
