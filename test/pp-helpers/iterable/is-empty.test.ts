import { testProp, fc } from "@fast-check/ava";

import { isEmpty } from "../../../src";
import { set } from "../../helpers/set-arbitrary";

testProp(
    "should check if an iterable is empty",
    [set(fc.anything())],
    async (t, set) => t.is(await isEmpty()(set), [...set].length === 0)
);
