import test from "ava";

import { queue } from "../../../src";
import { getIterator } from "../../../src/utils";

test("should properly iterate through a queue asynchronously", async (t) => {
    const numbers = queue<number>();

    numbers.push(1);
    numbers.push(-21);

    numbers.seal();

    numbers.push(0);

    const iterator = getIterator(numbers);

    t.deepEqual((await iterator.next()).value, 1);
    t.deepEqual((await iterator.next()).value, -21);
    t.deepEqual((await iterator.next()).done, true);
});
