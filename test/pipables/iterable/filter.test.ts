import { testProp, fc } from "@fast-check/ava";

import { filter, toArray } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should filter invalid values out of an iterable",
    [set(fc.float())],
    async (t, set) =>
        t.deepEqual(
            await toArray()(filter((x: number) => x < 0)(set)),
            [...set].filter((x) => x < 0)
        )
);
