import { testProp, fc } from "@fast-check/ava";

import { isFalsy } from "../../../src/index.js";

testProp("should check if a value is falsy", [fc.falsy()], (t, v) =>
    t.true(isFalsy()(v))
);
