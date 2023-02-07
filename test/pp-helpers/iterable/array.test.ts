import { testProp, fc } from "@fast-check/ava";

import { toArray } from "../../../src";
import { set } from "../../helpers/set-arbitrary";

testProp(
    "should convert an iterable to an array",
    [set(fc.anything())],
    async (t, set) => t.deepEqual(await toArray()(set), [...set])
);
