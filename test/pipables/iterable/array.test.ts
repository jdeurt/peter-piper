import { testProp, fc } from "@fast-check/ava";

import { toArray, toArrayAsync } from "../../../src/index.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should convert an iterable to an array",
    [set(fc.anything())],
    (t, set) => t.deepEqual(toArray()(set), [...set])
);

testProp(
    "should asynchronously convert an iterable to an array",
    [asyncIterable(fc.anything())],
    async (t, iter) => {
        const result = await toArrayAsync()(iter);

        const expected: unknown[] = [];
        for await (const value of iter) {
            expected.push(value);
        }

        t.deepEqual(result, expected);
    }
);
