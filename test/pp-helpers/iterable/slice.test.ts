import { testProp, fc } from "@fast-check/ava";

import { slice, toArray } from "../../../src";

testProp(
    "should slice out a chunk of an iterable",
    [
        fc.array(fc.anything()),
        fc.integer({ min: 0 }),
        fc.integer({ min: -1 }).map((x) => (x === -1 ? undefined : x)),
    ],
    async (t, arr, from, to) =>
        t.deepEqual(await toArray()(slice(from, to)(arr)), arr.slice(from, to))
);
