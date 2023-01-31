import { testProp, fc } from "@fast-check/ava";

import { find, findAsync } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";

testProp(
    "should retrieve the first value from an iterable that meets a predicate",
    [set(fc.float())],
    (t, set) =>
        t.deepEqual(
            find((x: number) => x < 0)(set),
            [...set].find((x) => x < 0)
        )
);

testProp(
    "should asynchronously retrieve the first value from an iterable that meets a predicate",
    [asyncIterable(fc.float())],
    async (t, iter) => {
        const result = await findAsync((x: number) => x < 0)(iter);

        let expected: unknown;
        for await (const value of iter) {
            if (value < 0) {
                expected = value;
                break;
            }
        }

        t.deepEqual(result, expected);
    }
);
