import { testProp, fc } from "@fast-check/ava";
import { from, toArraySync } from "../src";
import { set } from "./helpers/set-arbitrary";

testProp(
    "should allow iterables to 'split'",
    [set(fc.float())],
    async (t, set1) => {
        const source = from(set1).async().buffer(10);

        const consumer1 = await from(source).toArray();
        const consumer2 = await from(source).toArray();

        t.deepEqual(consumer1, toArraySync()(set1));
        t.deepEqual(consumer2, toArraySync()(set1));
    }
);
