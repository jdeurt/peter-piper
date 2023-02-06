import type { Range } from "../../types/range";

export const isRange = (value: unknown): value is Range =>
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number";
