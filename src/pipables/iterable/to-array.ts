/**
 * Creates a new array from the values of some input iterable.
 */
export const toArray =
    <T>() =>
    (iterable: Iterable<T>) =>
        [...iterable];
