import { testProp, fc } from "@fast-check/ava";

import {
    filter,
    filterAsync,
    toArrayAsync,
    using,
} from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";

testProp(
    "should filter invalid values out of an iterable",
    [set(fc.float())],
    (t, set) =>
        t.deepEqual(
            [...filter((x: number) => x < 0)(set)],
            [...set].filter((x) => x < 0)
        )
);

testProp(
    "should asynchronously filter invalid values out of an iterable",
    [asyncIterable(fc.float())],
    async (t, iter) => {
        const result = await using(iter).pipe(
            filterAsync((x: number) => x < 0),
            toArrayAsync()
        );

        const expected: unknown[] = [];
        for await (const value of iter) {
            if (value < 0) {
                expected.push(value);
            }
        }

        t.deepEqual(result, expected);
    }
);
