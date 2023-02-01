import { testProp, fc } from "@fast-check/ava";

import { match } from "../../../src/index.js";

testProp(
    "should allow for basic pattern-matching behavior",
    [fc.hexa(), fc.tuple(fc.hexa(), fc.hexa())],
    (t, char, charArr) =>
        t.is(
            match(
                [(x: string) => charArr.includes(x), () => true],
                [(x: string) => !charArr.includes(x), () => false]
            )(char),
            charArr.includes(char)
        )
);
