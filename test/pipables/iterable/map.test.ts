import { testProp, fc } from "@fast-check/ava";

import { map } from "../../../src/index.js";
import { set } from "../../helpers/set-arbitrary.js";

testProp("should map an iterable", [set(fc.float())], (t, set) =>
    t.deepEqual([...map(String)(set)], [...set].map(String))
);
