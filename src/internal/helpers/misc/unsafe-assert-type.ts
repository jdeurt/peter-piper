/**
 * Forcefully asserts the type of the input value to be `T` and returns that original value.
 * @group Other helpers
 * @example
 * using(unknownValue).pipe(
 *     unsafeAssertType<number[]>,
 *     reduce((acc, x) => acc + x)
 * );
 */
export const unsafeAssertType = <T>(input: unknown) => input as T;
