import { testProp, fc } from "@fast-check/ava";
import {
    concat,
    filter,
    map,
    toArray,
    using,
    __,
    from,
    webSocketAdapter,
    useSideEffect,
} from "../src";
import { set } from "./helpers/set-arbitrary";

testProp(
    "simple implementation",
    [set(fc.float()), set(fc.float())],
    async (t, set1, set2) => {
        const result = await using(set1).pipe(
            filter((x) => x > 0),
            concat(set2),
            map((x) => x * 2),
            toArray()
        );

        const expected = [...set1]
            .filter((x) => x > 0)
            .concat(...set2)
            .map((x) => x * 2);

        t.deepEqual(result, expected);
    }
);
