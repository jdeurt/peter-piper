/**
 * Maps some input stream to an equivalent async iterable.
 */
export const withStreamAdapter =
    <T>() =>
    (stream: ReadableStream<T>) =>
        ({
            [Symbol.asyncIterator]: () => {
                const reader = stream.getReader();

                return {
                    next: () => reader.read(),
                    return: () => reader.releaseLock(),
                };
            },
        } as AsyncIterable<T>);
