/**
 * Creates an iterable by concatenates an arbitrary amount of iterables to some base iterable.
 */
export const concat =
    <T>(...iterables: Iterable<T>[]) =>
    (base: Iterable<T>) =>
        ({
            [Symbol.iterator]: function* () {
                for (const iterable of [base, ...iterables]) {
                    yield* iterable;
                }
            },
        } as Iterable<T>);
