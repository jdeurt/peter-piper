import { testProp, fc } from "@fast-check/ava";

import { concat } from "../../../src/index.js";

testProp(
    "should concatenate iterables",
    [fc.array(fc.anything()), fc.array(fc.array(fc.anything()))],
    (t, base, others) =>
        t.deepEqual([...concat(...others)(base)], base.concat(...others))
);
