import { testProp, fc } from "@fast-check/ava";
import test from "ava";
import {
    concat,
    filter,
    fork,
    isEmpty,
    map,
    match,
    pipe,
    randomInts,
    reduce,
    takeSync,
    toArray,
    using,
    __,
} from "../src";
import { set } from "./helpers/set-arbitrary";

testProp(
    "simple implementation",
    [set(fc.float()), set(fc.float())],
    async (t, set1, set2) => {
        const result = await using(set1).pipe(
            filter((x: number) => x > 0),
            concat(set2),
            map((x: number) => x * 2),
            toArray<number>()
        );

        const expected = [...set1]
            .filter((x) => x > 0)
            .concat(...set2)
            .map((x) => x * 2);

        t.deepEqual(result, expected);
    }
);

testProp.failing(
    "complex implementation",
    [fc.array(set(fc.float()), { minLength: 2 })],
    async (t, [baseSet, ...otherSets]) => {
        const result = (await using(baseSet).pipe(
            fork(
                ...otherSets.map((set) =>
                    pipe(
                        concat(set),
                        match(
                            [isEmpty(), () => 0],
                            [__, reduce<number, number>((acc, x) => acc + x)]
                        )
                    )
                )
            )
        )) as number[];
    }
);
