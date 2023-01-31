import { testProp, fc } from "@fast-check/ava";

import { some, someAsync } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";

testProp(
    "should check if any of an iterable's values pass a check function",
    [set(fc.integer({ min: -10, max: 100 }))],
    (t, set) =>
        t.is(
            some((x: number) => x < 0)(set),
            [...set].some((x) => x < 0)
        )
);

testProp(
    "should asynchronously check if any of an iterable's values pass a check function",
    [asyncIterable(fc.integer({ min: -10, max: 100 }))],
    async (t, iter) => {
        const result = await someAsync((x: number) => x < 0)(iter);

        let expected = false;
        for await (const value of iter) {
            if (value < 0) {
                expected = true;
                break;
            }
        }

        t.is(result, expected);
    }
);
