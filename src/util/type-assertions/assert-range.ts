import type { Range } from "../../types/range";
import { isRange } from "../type-narrowing/is-range";

export function assertRange(value: unknown): asserts value is Range {
    if (!isRange(value)) {
        throw new TypeError(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `Expected value to be a Range ([number, number]), but got "${value}".`
        );
    }
}
