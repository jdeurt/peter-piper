/**
 * Wraps some input value in an async iterable.
 * @group Lazy helpers
 * @example
 * using(2).pipe(
 *     wrap(),
 *     // Now we can use iterable helpers
 *     map(...)
 * );
 */
export const wrap =
    <T>() =>
    (input: T): AsyncIterable<T> => ({
        // eslint-disable-next-line @typescript-eslint/require-await
        [Symbol.asyncIterator]: async function* () {
            yield input;
        },
    });
