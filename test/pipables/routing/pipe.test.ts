import { testProp, fc } from "@fast-check/ava";

import { pipe } from "../../../src";
import { set } from "../../helpers/set-arbitrary";

testProp(
    "should pipe a value through a chain of operations",
    [set(fc.anything())],
    (t, set) => t.deepEqual(pipe((x: Set<unknown>) => [...x])(set), [...set])
);
