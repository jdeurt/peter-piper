import { testProp, fc } from "@fast-check/ava";

import { some } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should check if any of an iterable's values pass a check function",
    [set(fc.integer({ min: -10, max: 100 }))],
    async (t, set) =>
        t.is(
            await some((x: number) => x < 0)(set),
            [...set].some((x) => x < 0)
        )
);
