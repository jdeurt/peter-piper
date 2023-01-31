import { testProp, fc } from "@fast-check/ava";

import { pluck } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

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
