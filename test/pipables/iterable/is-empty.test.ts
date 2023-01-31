import { testProp, fc } from "@fast-check/ava";

import { isEmpty } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should check if an iterable is empty",
    [set(fc.anything())],
    (t, set) => t.is(isEmpty()(set), [...set].length === 0)
);
