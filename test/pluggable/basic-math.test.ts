import { testProp, fc } from "@fast-check/ava";
import * as ppMath from "../../src/prelude";

testProp("comparison helpers", [fc.float(), fc.float()], async (t, x, y) => {
    t.is(ppMath.gt(x)(y), y > x);
    t.is(ppMath.gte(x)(y), y >= x);
    t.is(ppMath.lt(x)(y), y < x);
    t.is(ppMath.lte(x)(y), y <= x);
});

testProp(
    "binary n-to-n operation helpers",
    [fc.float(), fc.float()],
    async (t, x, y) => {
        t.is(ppMath.add(x)(y), y + x);
        t.is(ppMath.subtract(x)(y), y - x);
        t.is(ppMath.mult(x)(y), y * x);
        t.is(ppMath.div(x)(y), y / x);
    }
);
