/**
 * Returns the given input value without making any changes.
 *
 * @group Greedy helpers
 * @template T - The type of the input value.
 * @returns The input value.
 *
 * @example
 * ```ts
 * const value = 1;
 * const otherValue = noop()(value); // Still 1
 * ```
 */
export const noop =
    <T>() =>
    (input: T) =>
        input;
