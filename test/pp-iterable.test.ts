import { testProp, fc } from "@fast-check/ava";

import { filterSync, takeSync, toArraySync, from } from "../src";
import {
    isAsyncIterable,
    isIterable,
} from "../src/utils/type-narrowing/is-iterable";

testProp("should create a pp iterable", [fc.array(fc.anything())], (t, arr) => {
    const resultSync = from(arr);

    t.true(isIterable(resultSync));
    t.false(isAsyncIterable(resultSync));
});

testProp("should be indexable", [fc.array(fc.float())], (t, arr) => {
    const resultSync = from(arr);

    t.is(resultSync.at(0), arr[0]);
});

testProp(
    "should wrap a non-iterable in a pp iterable",
    [fc.anything()],
    (t, val) => {
        const resultSync = from(val);
        const firstValue = resultSync.take(1).consume((x) => x)[0];

        t.true(isIterable(resultSync));

        if (!isIterable(val)) {
            t.deepEqual(firstValue, val);
        } else if (!isAsyncIterable(val)) {
            t.deepEqual(firstValue, val[Symbol.iterator]().next().value);
        }
    }
);

testProp(
    "should map an iterable to a pp iterable",
    [fc.array(fc.anything())],
    (t, arr) => t.deepEqual([...from(arr)], arr)
);

testProp(
    "should allow for chaning iterable helpers",
    [fc.array(fc.float())],
    (t, arr) => {
        const result = from(arr)
            .filter((x) => x > 0)
            .take(2)
            .toArray();

        t.deepEqual(result, arr.filter((x) => x > 0).slice(0, 2));
    }
);

testProp("should allow for piping", [fc.array(fc.float())], (t, arr) => {
    const result = from(arr).pipe(
        filterSync((x: number) => x > 0),
        takeSync<number>(2),
        toArraySync<number>()
    );

    t.deepEqual(result, arr.filter((x) => x > 0).slice(0, 2));
});
