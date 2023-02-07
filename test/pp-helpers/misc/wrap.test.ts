import { testProp, fc } from "@fast-check/ava";

import { toArray, using, wrap } from "../../../src";

testProp("should wrap a value in an iterable", [fc.float()], async (t, x) =>
    t.deepEqual(await using(1).pipe(wrap<number>(), toArray<number>()), [1])
);
