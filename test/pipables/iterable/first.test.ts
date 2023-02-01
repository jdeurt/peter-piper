import { testProp, fc } from "@fast-check/ava";

import { first, toArray } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should return an iterable containing the first value from an iterable that meets a predicate",
    [set(fc.float())],
    async (t, set) =>
        t.deepEqual(
            await toArray()(first((x: number) => x < 0)(set)),
            [...set].filter((x) => x < 0).slice(0, 1)
        )
);
