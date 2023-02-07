import { testProp, fc } from "@fast-check/ava";

import { filterSync, takeSync, toArraySync, usingIterable } from "../src";
import {
    isAsyncIterable,
    isIterable,
} from "../src/util/type-narrowing/is-iterable";

testProp("should create a pp iterable", [fc.array(fc.anything())], (t, arr) => {
    const resultSync = usingIterable(arr);

    t.true(isIterable(resultSync));
    t.false(isAsyncIterable(resultSync));
});

testProp(
    "should map an iterable to a pp iterable",
    [fc.array(fc.anything())],
    (t, arr) => t.deepEqual([...usingIterable(arr)], arr)
);

testProp(
    "should allow for chaning iterable helpers",
    [fc.array(fc.float())],
    (t, arr) => {
        const result = usingIterable(arr)
            .filter((x) => x > 0)
            .take(2)
            .toArray();

        t.deepEqual(result, arr.filter((x) => x > 0).slice(0, 2));
    }
);

testProp("should allow for piping", [fc.array(fc.float())], (t, arr) => {
    const result = usingIterable(arr).pipe(
        filterSync((x: number) => x > 0),
        takeSync<number>(2),
        toArraySync<number>()
    );

    t.deepEqual(result, arr.filter((x) => x > 0).slice(0, 2));
});
