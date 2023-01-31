import { testProp, fc } from "@fast-check/ava";

import { transform } from "../../../src/index.js";

testProp(
    "should transform a value using a callback function",
    [fc.float()],
    (t, value) => t.is(transform(String)(value), String(value))
);
