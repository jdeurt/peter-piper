import { testProp, fc } from "@fast-check/ava";

import { deeplyEquals } from "../../../src/index.js";

testProp(
    "should check for deep equality between values",
    [fc.object()],
    (t, x) => t.true(deeplyEquals(structuredClone(x))(x))
);
