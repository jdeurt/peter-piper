/**
 * Returns `true` if `x` strictly equals `y`. Returns `false` otherwise.
 * @behavior greedy
 * @example
 * using(1).pipe(
 *     equals(1)
 * );
 */
export const equals = (y: unknown) => (x: unknown) => x === y;
