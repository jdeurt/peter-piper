import { testProp, fc } from "@fast-check/ava";

import { find } from "../../../src";
import { set } from "../../helpers/set-arbitrary";

testProp(
    "should retrieve the first value from an iterable that meets a predicate",
    [set(fc.float())],
    async (t, set) =>
        t.deepEqual(
            await find((x: number) => x < 0)(set),
            [...set].find((x) => x < 0)
        )
);
