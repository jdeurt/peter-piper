import { testProp, fc } from "@fast-check/ava";

import { every } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should check if an iterable's values all pass a check function",
    [set(fc.integer({ min: -100, max: 100 }))],
    (t, set) =>
        t.is(
            every((x: number) => x >= 0)(set),
            [...set].every((x) => x >= 0)
        )
);
