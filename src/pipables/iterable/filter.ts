/**
 * Creates a new iterable containing all values of some input iterable that satisfy the provided predicate.
 */
export const filter =
    <T>(predicate: (value: T, index: number) => boolean) =>
    (iterable: Iterable<T>) =>
        ({
            [Symbol.iterator]: function* () {
                let index = 0;

                for (const value of iterable) {
                    if (predicate(value, index++)) {
                        yield value;
                    }
                }
            },
        } as Iterable<T>);
