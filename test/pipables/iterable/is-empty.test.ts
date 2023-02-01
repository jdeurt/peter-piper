import { testProp, fc } from "@fast-check/ava";

import { isEmpty } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should check if an iterable is empty",
    [set(fc.anything())],
    async (t, set) => t.is(await isEmpty()(set), [...set].length === 0)
);
