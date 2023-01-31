import { testProp, fc } from "@fast-check/ava";

import { concat, concatAsync, toArrayAsync } from "../../../src/index.js";

testProp(
    "should concatenate iterables",
    [fc.array(fc.anything()), fc.array(fc.array(fc.anything()))],
    (t, base, others) =>
        t.deepEqual([...concat(...others)(base)], base.concat(...others))
);

testProp(
    "should concatenate iterables asynchronously",
    [fc.array(fc.anything()), fc.array(fc.array(fc.anything()))],
    async (t, base, others) => {
        const iter = concatAsync(...others)(base);

        t.deepEqual(await toArrayAsync()(iter), base.concat(...others));
    }
);
