import { testProp, fc } from "@fast-check/ava";

import { limit, toArray } from "../../../src/index.js";

testProp(
    "should limit an iterable to an amount of values",
    [fc.array(fc.anything()), fc.integer({ min: 0 })],
    async (t, arr, x) =>
        t.deepEqual(await toArray()(limit(x)(arr)), arr.slice(0, x))
);
