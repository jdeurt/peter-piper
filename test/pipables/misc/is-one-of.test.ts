import { testProp, fc } from "@fast-check/ava";

import { isOneOf } from "../../../src";

testProp(
    "should check if a value is present in an array of values",
    [fc.array(fc.base64()), fc.hexa()],
    (t, arr, value) => t.is(isOneOf(arr)(value), arr.includes(value))
);
