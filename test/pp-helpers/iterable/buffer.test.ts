import test from "ava";

import { range } from "../../../src";
import { approximatelyEqualTo } from "../../helpers/approximately-equal-to";

test("should buffer iterable output", async (t) => {
    let last = Date.now();

    for await (const n of range([0, Infinity]).take(5).async().buffer(100)) {
        if (n === 0) {
            t.true(approximatelyEqualTo(last, 10)(Date.now()));
        } else {
            t.true(approximatelyEqualTo(last + 100, 10)(Date.now()));
        }

        last = Date.now();
    }
});
