import { testProp, fc } from "@fast-check/ava";

import { pluck, pluckAsync, toArrayAsync, using } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";
import { asyncIterable } from "../../helpers/async-iterable-arbitrary.js";

testProp(
    "should pluck properties from an iterable using a key path",
    [
        set(
            fc.object({
                key: fc.hexa(),
                values: [
                    fc.object({
                        key: fc.hexa(),
                    }),
                ],
            })
        ),
        fc.array(fc.hexa(), { maxLength: 2 }),
    ],
    (t, set, keys) =>
        t.deepEqual(
            [...pluck(...keys)(set)],
            [...set].map((v) => {
                const [k1, k2] = keys;

                if (k1 === undefined) {
                    return v;
                }

                if (k2 === undefined) {
                    return v[k1];
                }

                return v[k1]?.[k2];
            })
        )
);

testProp(
    "should asynchronously pluck properties from an iterable using a key path",
    [
        asyncIterable(
            fc.object({
                key: fc.hexa(),
                values: [
                    fc.object({
                        key: fc.hexa(),
                    }),
                ],
            })
        ),
        fc.array(fc.hexa(), { maxLength: 2 }),
    ],
    async (t, iter, keys) => {
        const result = await using(iter).pipe(
            pluckAsync(...keys),
            toArrayAsync()
        );

        const expected: unknown[] = [];
        for await (const value of iter) {
            const [k1, k2] = keys;

            if (k1 === undefined) {
                expected.push(value);
            } else if (k2 === undefined) {
                expected.push(value[k1]);
            } else {
                expected.push(value[k1]?.[k2]);
            }
        }

        t.deepEqual(result, expected);
    }
);
