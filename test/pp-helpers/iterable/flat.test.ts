import { testProp, fc } from "@fast-check/ava";

import { toArray, flat } from "../../../src";

testProp(
    "should flatten iterables",
    [
        fc.array(fc.array(fc.array(fc.array(fc.array(fc.float()))))),
        fc.integer({ min: -1, max: 5 }),
    ],
    async (t, arr, depth) => {
        // @ts-ignore
        depth = depth === -1 ? undefined : depth;

        const flattened = await flat<number[][][][], number>(depth)(arr);
        const flattenedArr = arr.flat(depth);

        t.deepEqual(await toArray()(flattened), flattenedArr);
    }
);
