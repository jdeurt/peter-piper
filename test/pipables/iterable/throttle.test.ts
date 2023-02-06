import test from "ava";

import { throttle, toArray, using } from "../../../src";
import { wait } from "../../helpers/wait";

const intervalGenerator = async function* () {
    for (let i = 0; i < 50; i++) {
        await wait(10);

        yield 1;
    }
};

test("should throttle iterable output", async (t) => {
    const result = await using(intervalGenerator()).pipe(
        throttle<number>(20),
        toArray<number>()
    );

    t.true([24, 25, 26].includes(result.length));
});
