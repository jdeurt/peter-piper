import { testProp, fc } from "@fast-check/ava";

import { isEmpty, isEmptyAsync } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";

testProp(
    "should check if an iterable is empty",
    [set(fc.anything())],
    (t, set) => t.is(isEmpty()(set), [...set].length === 0)
);

testProp(
    "should asynchronously check if an iterable is empty",
    [asyncIterable(fc.anything())],
    async (t, iter) => {
        const result = await isEmptyAsync()(iter);

        let expected = true;
        for await (const _ of iter) {
            expected = false;
            break;
        }

        t.is(result, expected);
    }
);
