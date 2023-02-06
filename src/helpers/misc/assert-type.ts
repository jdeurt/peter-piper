/**
 * Forcefully asserts the type of the last output to be `T` and returns that original value.
 * @group Other helpers
 * @example
 * using(unknownValue).pipe(
 *     assertType<number[]>(),
 *     reduce((acc, x) => acc + x)
 * );
 */
export const assertType =
    <T>() =>
    (input: unknown) =>
        input as T;
