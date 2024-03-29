import { testProp, fc } from "@fast-check/ava";
import test from "ava";

import { filter, map, slice, using } from "../src";
import { infiniteNumberGenerator } from "./helpers/inifinite-number-generator";

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

test("should lazily evaluate iterables", async (t) => {
    const iterator = using(infiniteNumberGenerator())
        .pipe(
            filter((value) => value % 2 === 0),
            slice(0, 5),
            map((value) => `n${value}`)
        )
        [Symbol.asyncIterator]();

    t.is((await iterator.next()).value, "n0");
    t.is((await iterator.next()).value, "n2");
    t.is((await iterator.next()).value, "n4");
    t.is((await iterator.next()).value, "n6");
    t.is((await iterator.next()).value, "n8");
    t.is((await iterator.next()).done, true);
});
