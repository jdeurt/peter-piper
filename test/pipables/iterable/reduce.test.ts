import { testProp, fc } from "@fast-check/ava";

import { reduce, reduceAsync } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";

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

testProp(
    "should asynchronously reduce an iterable to a value",
    [asyncIterable(fc.float(), { minLength: 1 })],
    async (t, iter) => {
        const result = await reduceAsync((acc, x: number) => acc + x)(iter);
        const resultWithInitial = await reduceAsync(
            (acc, x: number) => acc + x,
            10
        )(iter);

        let expected = 0;
        let expectedWithInitial = 10;
        for await (const value of iter) {
            expected += value;
            expectedWithInitial += value;
        }

        t.is(result, expected) && t.is(resultWithInitial, expectedWithInitial);
    }
);

testProp(
    "should throw if async iterable is empty and no initial value is provided",
    [asyncIterable(fc.float(), { maxLength: 0 })],
    async (t, iter) => {
        await t.throwsAsync(reduceAsync((acc, x: number) => acc + x)(iter), {
            message: "Reduce of empty iterable with no initial value",
        });
    }
);
