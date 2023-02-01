import { testProp, fc } from "@fast-check/ava";

import { flat, flatAsync } from "../../../src/pipables/iterable/flat.js";
import { isEmpty, isEmptyAsync } from "../../../src/index.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";
import {
    isIterable,
    isSyncIterable,
    isAsyncIterable,
} from "../../../src/util/iterable.js";
import { set } from "../../helpers/set-arbitrary.js";

const calcIterableDepth = (iterable: unknown, currDepth = 0): number => {
    if (
        !isIterable(iterable) ||
        !isSyncIterable(iterable) ||
        isEmpty()(iterable)
    ) {
        return currDepth;
    }

    let depth = currDepth;
    for (const value of iterable) {
        depth = Math.max(depth, calcIterableDepth(value, currDepth + 1));
    }

    return depth;
};

const calcAsyncIterableDepth = async (
    iterable: unknown,
    currDepth = 0
): Promise<number> => {
    if (
        !isIterable(iterable) ||
        !isAsyncIterable(iterable) ||
        (await isEmptyAsync()(iterable))
    ) {
        return currDepth;
    }

    let depth = currDepth;
    for await (const value of iterable) {
        depth = Math.max(
            depth,
            await calcAsyncIterableDepth(value, currDepth + 1)
        );
    }

    return depth;
};

testProp.failing(
    "should flatten an iterable",
    [
        set(
            fc.oneof(
                set(fc.oneof(set(fc.anything()), fc.anything())),
                fc.anything()
            )
        ),
        fc.nat(5),
    ],
    (t, set, depth) => {
        const startingDepth = calcIterableDepth(set);

        const result = flat(depth)(set);

        const resultingDepth = calcIterableDepth(result);

        t.is(resultingDepth, Math.max(0, startingDepth - depth));
    }
);

testProp.failing(
    "should flatten an async iterable",
    [
        asyncIterable(
            fc.oneof(
                asyncIterable(
                    fc.oneof(asyncIterable(fc.anything()), fc.anything())
                ),
                fc.anything()
            )
        ),
        fc.nat(5),
    ],
    async (t, asyncIter, depth) => {
        const startingDepth = await calcAsyncIterableDepth(set);

        const result = await flatAsync(depth)(asyncIter);

        const resultingDepth = await calcAsyncIterableDepth(result);

        t.is(resultingDepth, Math.max(0, startingDepth - depth));
    }
);
