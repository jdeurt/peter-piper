/**
 * Checks if some input number is strictly greater than `n`.
 * @group Utility functions
 * @example
 * gt(3)(3); // false
 * gt(3)(4); // true
 */
export const gt = (n: number) => (input: number) => input > n;

/**
 * Checks if some input number is greater than or equal to `n`.
 * @group Utility functions
 * @example
 * gte(3)(2); // false
 * gte(3)(3); // true
 * gte(3)(4); // true
 */
export const gte = (n: number) => (input: number) => input >= n;

/**
 * Checks if some input number is strictly less than `n`.
 * @group Utility functions
 * @example
 * lt(3)(3); // false
 * lt(3)(2); // true
 */
export const lt = (n: number) => (input: number) => input < n;

/**
 * Checks if some input number is less than or equal to `n`.
 * @group Utility functions
 * @example
 * lte(3)(2); // true
 * lte(3)(3); // true
 * lte(3)(4); // false
 */
export const lte = (n: number) => (input: number) => input <= n;

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
