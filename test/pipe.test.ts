import { testProp, fc } from "@fast-check/ava";
import test from "ava";

import { filter, map, slice, using } from "../src/index.js";
import { infiniteNumberGenerator } from "./helpers/inifinite-number-generator.js";

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

test("should lazily evaluate iterables", (t) => {
    const iterator = using(infiniteNumberGenerator())
        .pipe(
            filter((value: number) => value % 2 === 0),
            slice<number>(0, 5),
            map((value: number) => `n${value}`)
        )
        [Symbol.iterator]();

    t.is(iterator.next().value, "n0");
    t.is(iterator.next().value, "n2");
    t.is(iterator.next().value, "n4");
    t.is(iterator.next().value, "n6");
    t.is(iterator.next().value, "n8");
    t.is(iterator.next().done, true);
});
