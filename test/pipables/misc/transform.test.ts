import { testProp, fc } from "@fast-check/ava";

import { transform, transformAsync } from "../../../src/index.js";

testProp(
    "should transform a value using a callback function",
    [fc.float()],
    (t, value) => t.is(transform(String)(value), String(value))
);

testProp(
    "should asynchronously transform a value using a callback function",
    [fc.float()],
    async (t, value) => {
        t.is(
            await transformAsync(String)(Promise.resolve(value)),
            String(value)
        );
    }
);
