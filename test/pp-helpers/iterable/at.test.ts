import { testProp, fc } from "@fast-check/ava";

import { at } from "../../../src";

testProp(
    "should retrieve the nth element of an iterable",
    [fc.array(fc.anything()), fc.integer()],
    async (t, arr, n) => t.deepEqual(await at(n)(arr), arr.at(n))
);
