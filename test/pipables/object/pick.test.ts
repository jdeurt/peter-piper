import { testProp, fc } from "@fast-check/ava";

import { pick } from "../../../src/index.js";

testProp(
    "should pick out a property from an object using a key path",
    [
        fc.object({
            key: fc.hexa(),
            values: [
                fc.object({
                    key: fc.hexa(),
                }),
            ],
        }),
        fc.array(fc.hexa(), { maxLength: 2 }),
    ],
    (t, obj, keys) =>
        t.deepEqual(
            pick(...keys)(obj),
            ((o) => {
                const [k1, k2] = keys;

                if (k1 === undefined) {
                    return o;
                }

                if (k2 === undefined) {
                    return o[k1];
                }

                return o[k1]?.[k2];
            })(obj)
        )
);
