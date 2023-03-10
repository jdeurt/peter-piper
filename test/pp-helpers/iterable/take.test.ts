import { testProp, fc } from "@fast-check/ava";

import { take, toArray } from "../../../src";

testProp(
    "should limit an iterable to an amount of values",
    [fc.array(fc.anything()), fc.integer({ min: 0 })],
    async (t, arr, x) =>
        t.deepEqual(await toArray()(take(x)(arr)), arr.slice(0, x))
);
