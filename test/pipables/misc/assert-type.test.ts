import { testProp, fc } from "@fast-check/ava";

import { assertType } from "../../../src";

testProp("should do nothing but assert a type", [fc.anything()], (t, value) => {
    t.is(assertType()(value), value);
});
