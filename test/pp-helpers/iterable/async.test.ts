import test from "ava";

import { from } from "../../../src";
import { isAsyncIterable } from "../../../src/utils";

test("should convert an iterable to an equivalent async iterable", async (t) => {
    const syncIterable = from(function* () {
        let i = 0;

        while (true) {
            yield i++;
        }
    });

    const asyncIterable = from(async function* () {
        let i = 0;

        while (true) {
            yield i++;
        }
    });

    const syncConverted = syncIterable.async();
    const asyncConverted = asyncIterable.async();

    t.true(isAsyncIterable(syncConverted));
    t.true(isAsyncIterable(asyncConverted));

    let j = 0;

    for await (const i of syncConverted.take(3)) {
        t.is(i, j++);
    }

    j = 0;

    for await (const i of asyncConverted.take(3)) {
        t.is(i, j++);
    }
});
