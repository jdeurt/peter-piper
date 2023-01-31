/**
 * Retrieves the first value of some input iterable that satisfies the provided predicate.
 */
export const find =
    <T>(predicate: (value: T, index: number) => boolean) =>
    (iterable: Iterable<T>) => {
        let index = 0;

        for (const value of iterable) {
            if (predicate(value, index++)) {
                return value;
            }
        }
    };
