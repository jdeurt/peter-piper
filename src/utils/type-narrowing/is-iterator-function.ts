/**
 * Returns a boolean representing whether or not the provided value is a function that returns an async iterator.
 */
export const isAsyncIteratorFunction = (
    value: unknown
): value is () => AsyncIterator<unknown> => {
    return (
        typeof value === "function" &&
        value.constructor.name === "AsyncGeneratorFunction"
    );
};

/**
 * Returns a boolean representing whether or not the provided value is a function that returns an iterator.
 */
export const isIteratorFunction = (
    value: unknown
): value is () => Iterator<unknown> => {
    return (
        typeof value === "function" &&
        value.constructor.name === "GeneratorFunction"
    );
};
