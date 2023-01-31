import { testProp, fc } from "@fast-check/ava";

import { isTruthy } from "../../../src/index.js";

testProp("should check if a value is truthy", [fc.falsy()], (t, v) =>
    t.false(isTruthy()(v))
);
