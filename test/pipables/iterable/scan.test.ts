import { testProp, fc } from "@fast-check/ava";

import { scan, toArray } from "../../../src";
import { set } from "../../helpers/set-arbitrary";

testProp(
    "should reduce an iterable to a value sequentially",
    [set(fc.float())],
    async (t, set) =>
        t.deepEqual(
            await toArray()(scan((acc, x: number) => acc + x)(set)),
            [...set].reduce(
                (acc, x) => [...acc, (acc.at(-1) ?? 0) + x],
                [] as number[]
            )
        ) &&
        t.deepEqual(
            await toArray()(scan((acc, x: number) => acc + x, 10)(set)),
            [...set]
                .reduce((acc, x) => [...acc, (acc.at(-1) ?? 0) + x], [10])
                .slice(1)
        )
);
