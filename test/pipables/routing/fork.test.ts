import { testProp, fc } from "@fast-check/ava";

import { fork } from "../../../src/index.js";

testProp(
    "should allow for creating forks in execution paths",
    [fc.oneof(fc.hexa(), fc.constant(""))],
    (t, char) =>
        t.deepEqual(fork(String, Boolean, Number)(char), [
            String(char),
            Boolean(char),
            Number(char),
        ])
);
