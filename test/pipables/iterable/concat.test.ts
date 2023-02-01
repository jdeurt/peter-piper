import { testProp, fc } from "@fast-check/ava";

import { concat, toArray } from "../../../src/index.js";

testProp(
    "should concatenate iterables",
    [fc.array(fc.anything()), fc.array(fc.array(fc.anything()))],
    async (t, base, others) =>
        t.deepEqual(
            await toArray()(concat(...others)(base)),
            base.concat(...others)
        )
);
