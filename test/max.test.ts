import { testProp, fc } from "@fast-check/ava";

import { max } from "../src/index.js";

testProp(
    "should return the largest number in a set of numbers",
    [fc.array(fc.float())],
    (t, ns) => t.is(max(...ns), Math.max(...ns))
);
