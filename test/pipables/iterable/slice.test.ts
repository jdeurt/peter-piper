import { testProp, fc } from "@fast-check/ava";

import { slice, sliceAsync, toArrayAsync, using } from "../../../src/index.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";

testProp(
    "should slice out a chunk of an iterable",
    [
        fc.array(fc.anything()),
        fc.integer({ min: 0 }),
        fc.integer({ min: -1 }).map((x) => (x === -1 ? undefined : x)),
    ],
    (t, arr, from, to) =>
        t.deepEqual([...slice(from, to)(arr)], arr.slice(from, to))
);

testProp(
    "should asynchronously slice out a chunk of an iterable",
    [
        asyncIterable(fc.anything()),
        fc.integer({ min: 0 }),
        fc.integer({ min: -1 }).map((x) => (x === -1 ? undefined : x)),
    ],
    async (t, iter, from, to) => {
        const result = await using(iter).pipe(
            sliceAsync(from, to),
            toArrayAsync()
        );

        const expected: unknown[] = [];
        let i = 0;
        for await (const value of iter) {
            if (i >= from && (to === undefined || i < to)) {
                expected.push(value);
            }
            i++;
        }

        t.deepEqual(result, expected);
    }
);
