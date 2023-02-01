/**
 * Returns `true` if `x` strictly equals `y`. Returns `false` otherwise.
 * @group Greedy helpers
 * @example
 * using(1).pipe(
 *     equals(1)
 * );
 */
export const equals = (y: unknown) => (x: unknown) => x === y;
