export const iterable = <T>(iterator: () => Iterator<T>): Iterable<T> => ({
    [Symbol.iterator]: iterator,
});

export const asyncIterable = <T>(
    iterator: () => AsyncIterator<T>
): AsyncIterable<T> => ({
    [Symbol.asyncIterator]: iterator,
});
