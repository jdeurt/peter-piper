import { testProp, fc } from "@fast-check/ava";

import { map, toArray } from "../../../src";
import { set } from "../../helpers/set-arbitrary";

testProp("should map an iterable", [set(fc.float())], async (t, set) =>
    t.deepEqual(await toArray()(map(String)(set)), [...set].map(String))
);
