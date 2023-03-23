import { testProp, fc } from "@fast-check/ava";

import { toArray, zip } from "../../../src";

/**
 *
 * @param arrays
 * @returns
 */
const zipArrays = <T>(...arrays: T[][]) => {
    const shortestLength = Math.min(
        ...(arrays.length === 0 ? [0] : arrays.map((arr) => arr.length))
    );

    return Array.from({ length: shortestLength }, (_, i) =>
        arrays.map((arr) => arr[i])
    );
};

testProp(
    "should zip children together",
    [fc.array(fc.array(fc.float()))],
    async (t, arr) => {
        const zipped = zip<number[]>()(arr);
        const zippedArrays = zipArrays(...arr);

        for await (const [elem, index] of zipped.map(
            (v, i) => [v, i] as const
        )) {
            t.deepEqual(elem, zippedArrays[index]);
        }

        t.is((await toArray()(zipped)).length, zippedArrays.length);
    }
);
