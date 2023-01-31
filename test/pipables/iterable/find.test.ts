import { testProp, fc } from "@fast-check/ava";

import { find } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should retrieve the first value from an iterable that meets a predicate",
    [set(fc.float())],
    (t, set) =>
        t.deepEqual(
            find((x: number) => x < 0)(set),
            [...set].find((x) => x < 0)
        )
);
