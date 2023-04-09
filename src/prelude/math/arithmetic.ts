/**
 * Adds `n` to some input number.
 * @group Utility functions
 * @example
 * add(3)(2); // 5
 */
export const add = (n: number) => (input: number) => input + n;

/**
 * Subtracts `n` from some input number.
 * @group Utility functions
 * @example
 * subtract(3)(2); // -1
 */
export const subtract = (n: number) => (input: number) => input - n;

/**
 * Multiplies some input number by `n`.
 * @group Utility functions
 * @example
 * mult(3)(2); // 6
 */
export const mult = (n: number) => (input: number) => input * n;

/**
 * Divides some input number by `n`.
 * @group Utility functions
 * @example
 * div(3)(2); // 2/3
 */
export const div = (n: number) => (input: number) => input / n;

/**
 * Computes the sum of all input numbers.
 * @group Utility functions
 * @example
 * sum()(1, 3, 8, -1); // 11
 */
export const sum =
    () =>
    (...input: number[]) =>
        input.reduce((acc, n) => acc + n);
