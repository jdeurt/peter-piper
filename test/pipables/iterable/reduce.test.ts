import { testProp, fc } from "@fast-check/ava";

import { reduce } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp(
    "should reduce an iterable to a value",
    [set(fc.float(), { minLength: 1 })],
    (t, set) =>
        t.is(
            reduce((acc, x: number) => acc + x)(set),
            [...set].reduce((acc, x) => acc + x)
        ) &&
        t.is(
            reduce((acc, x: number) => acc + x, 10)(set),
            [...set].reduce((acc, x) => acc + x, 10)
        )
);

testProp(
    "should throw if iterable is empty and no initial value is provided",
    [set(fc.float(), { maxLength: 0 })],
    (t, set) =>
        t.throws(() => reduce((acc, x: number) => acc + x)(set), {
            message: "Reduce of empty iterable with no initial value",
        })
);
