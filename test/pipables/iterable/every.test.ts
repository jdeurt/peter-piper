import { testProp, fc } from "@fast-check/ava";

import { every, everyAsync } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";

testProp(
    "should check if an iterable's values all pass a check function",
    [set(fc.integer({ min: -100, max: 100 }))],
    (t, set) =>
        t.is(
            every((x: number) => x >= 0)(set),
            [...set].every((x) => x >= 0)
        )
);

testProp(
    "should asynchronously check if an iterable's values all pass a check function",
    [asyncIterable(fc.integer({ min: -100, max: 100 }))],

    async (t, iter) => {
        const result = await everyAsync((x: number) => x >= 0)(iter);

        let expected = true;
        for await (const value of iter) {
            if (!(value >= 0)) {
                expected = false;
                break;
            }
        }

        t.is(result, expected);
    }
);
