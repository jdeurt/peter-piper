import { testProp, fc } from "@fast-check/ava";

import { equals } from "../../../src/index.js";

testProp(
    "should check for equality between values",
    [fc.nat(100), fc.nat(100)],
    (t, x, y) => t.is(equals(y)(x), x === y)
);
