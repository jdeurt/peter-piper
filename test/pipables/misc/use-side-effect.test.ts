import { testProp, fc } from "@fast-check/ava";

import { useSideEffect } from "../../../src";

testProp("should produce a side-effect", [fc.float()], (t, value) => {
    let someValue = 0;

    t.is(useSideEffect((x: number) => (someValue = x))(value), value);
    t.is(someValue, value);
});
