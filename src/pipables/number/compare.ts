type ComparisonOperator = "<" | "<=" | ">" | ">=";

/**
 * Compares some input `n` to `x` using the provided comparison operator and returns the result of the comparison.
 */
export const compare = (op: ComparisonOperator, x: number) => (n: number) => {
    switch (op) {
        case "<": {
            return n < x;
        }
        case "<=": {
            return n <= x;
        }
        case ">": {
            return n > x;
        }
        case ">=": {
            return n >= x;
        }
    }
};
