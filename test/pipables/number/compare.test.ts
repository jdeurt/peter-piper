import { testProp, fc } from "@fast-check/ava";

import { compare } from "../../../src/index.js";

testProp(
    "should compare a number to another number",
    [fc.float(), fc.float()],
    (t, x, y) =>
        t.deepEqual(
            [
                compare("<", y)(x),
                compare("<=", y)(x),
                compare(">", y)(x),
                compare(">=", y)(x),
            ],
            [x < y, x <= y, x > y, x >= y]
        )
);
