import { testProp, fc } from "@fast-check/ava";

import { filter } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should filter invalid values out of an iterable",
    [set(fc.float())],
    (t, set) =>
        t.deepEqual(
            [...filter((x: number) => x < 0)(set)],
            [...set].filter((x) => x < 0)
        )
);
