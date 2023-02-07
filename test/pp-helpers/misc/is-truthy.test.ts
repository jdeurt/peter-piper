import { testProp, fc } from "@fast-check/ava";

import { isTruthy } from "../../../src";

testProp("should check if a value is truthy", [fc.falsy()], (t, v) =>
    t.false(isTruthy()(v))
);
