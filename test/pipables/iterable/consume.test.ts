import { testProp, fc } from "@fast-check/ava";

import { consume } from "../../../src";

testProp(
    "should fully consume an iterable",
    [fc.array(fc.anything())],
    async (t, arr) => t.deepEqual(await consume((x) => x)(arr), arr)
);
