import { testProp, fc } from "@fast-check/ava";

import { using } from "../src/index.js";

testProp(
    "should pipe a value through a chain of operations",
    [fc.float()],
    (t, x) =>
        t.is(
            using(x).pipe(
                (x) => x * 2,
                (x) => x + 10,
                (x) => x / 10,
                (x) => x.toString(2)
            ),
            ((x * 2 + 10) / 10).toString(2)
        )
);
