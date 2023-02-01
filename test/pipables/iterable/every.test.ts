import { testProp, fc } from "@fast-check/ava";

import { every } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should check if an iterable's values all pass a check function",
    [set(fc.integer({ min: -100, max: 100 }))],
    async (t, set) =>
        t.is(
            await every((x: number) => x >= 0)(set),
            [...set].every((x) => x >= 0)
        )
);
