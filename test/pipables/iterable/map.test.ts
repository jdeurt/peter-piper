import { testProp, fc } from "@fast-check/ava";

import { map, mapAsync, toArrayAsync, using } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";

testProp("should map an iterable", [set(fc.float())], (t, set) =>
    t.deepEqual([...map(String)(set)], [...set].map(String))
);

testProp(
    "should asynchronously map an iterable",
    [asyncIterable(fc.float())],
    async (t, iter) => {
        const result = await using(iter).pipe(mapAsync(String), toArrayAsync());

        const expected: unknown[] = [];
        for await (const value of iter) {
            expected.push(String(value));
        }

        t.deepEqual(result, expected);
    }
);
