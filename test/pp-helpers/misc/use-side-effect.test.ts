import { testProp, fc } from "@fast-check/ava";

import { useSideEffect } from "../../../src";

testProp("should produce a side-effect", [fc.float()], async (t, value) => {
    let someValue = 0;

    t.is(await useSideEffect((x: number) => (someValue = x))(value), value);
    t.is(someValue, value);
});
