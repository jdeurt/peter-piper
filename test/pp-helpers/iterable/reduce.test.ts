import { testProp, fc } from "@fast-check/ava";

import { reduce } from "../../../src";
import { set } from "../../helpers/set-arbitrary";

testProp(
    "should reduce an iterable to a value",
    [set(fc.float(), { minLength: 1 })],
    async (t, set) =>
        t.is(
            await reduce((acc, x: number) => acc + x)(set),
            [...set].reduce((acc, x) => acc + x)
        ) &&
        t.is(
            await reduce((acc, x: number) => acc + x, 10)(set),
            [...set].reduce((acc, x) => acc + x, 10)
        )
);

testProp(
    "should throw if iterable is empty and no initial value is provided",
    [set(fc.float(), { maxLength: 0 })],
    async (t, set) =>
        t.throwsAsync(
            async () => await reduce((acc, x: number) => acc + x)(set),
            {
                message: "Reduce of empty iterable with no initial value",
            }
        )
);
