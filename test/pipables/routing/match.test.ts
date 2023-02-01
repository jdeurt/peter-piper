import { testProp, fc } from "@fast-check/ava";

import { match, __ } from "../../../src/index.js";

testProp(
    "should allow for basic pattern-matching behavior",
    [fc.hexa(), fc.tuple(fc.hexa(), fc.hexa())],
    async (t, char, charArr) =>
        t.is(
            await match(
                [(x: string) => charArr.includes(x), () => true],
                [__, () => false]
            )(char),
            charArr.includes(char)
        )
);
