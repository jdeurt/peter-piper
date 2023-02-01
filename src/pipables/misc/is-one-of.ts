/**
 * Returns `true` if some input value is present in the provided array of values. Returns `false` otherwise.
 * @group Greedy helpers
 * @example
 * using(2).pipe(
 *     isOneOf([1, 2, 3])
 * );
 */
export const isOneOf =
    <T>(values: T[]) =>
    (input: T) =>
        values.includes(input);
