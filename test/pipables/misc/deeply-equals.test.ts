import { testProp, fc } from "@fast-check/ava";

import { deeplyEquals } from "../../../src";

testProp(
    "should check for deep equality between values",
    [fc.object()],
    (t, x) =>
        t.is(
            deeplyEquals(structuredClone(x), { checkNaN: true })(x),
            t.deepEqual(structuredClone(x), x)
        )
);
