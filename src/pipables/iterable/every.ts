/**
 * Tests whether all values of some input iterable satisfy the provided predicate.
 */
export const every =
    <T>(predicate: (value: T, index: number) => boolean) =>
    (iterable: Iterable<T>) => {
        let index = 0;
        let accumulator = true;

        for (const value of iterable) {
            accumulator = accumulator && predicate(value, index++);
        }

        return accumulator;
    };
