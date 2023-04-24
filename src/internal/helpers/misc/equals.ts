/**
 * Returns `true` if some input value strictly equals the provided value. Returns `false` otherwise.
 * @group Greedy helpers
 * @example
 * using(1).pipe(
 *     equals(1)
 * );
 */
export const equals = (value: unknown) => (input: unknown) => input === value;
