export const isAsyncIteratorFunction = (
    value: unknown
): value is () => AsyncIterator<unknown> => {
    return (
        typeof value === "function" &&
        value.constructor.name === "AsyncGeneratorFunction"
    );
};

export const isIteratorFunction = (
    value: unknown
): value is () => Iterator<unknown> => {
    return (
        typeof value === "function" &&
        value.constructor.name === "GeneratorFunction"
    );
};
