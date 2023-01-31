import { testProp, fc } from "@fast-check/ava";

import { pipe } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should pipe a value through a chain of operations",
    [set(fc.anything())],
    (t, set) => t.deepEqual(pipe((x: Set<unknown>) => [...x])(set), [...set])
);
