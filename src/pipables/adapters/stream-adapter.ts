/**
 * Maps some input stream to an equivalent async iterable.
 * @group Adapters
 */
export const withStreamAdapter =
    <T>() =>
    (input: ReadableStream<T>) =>
        ({
            [Symbol.asyncIterator]: () => {
                const reader = input.getReader();

                return {
                    next: () => reader.read(),
                    return: () => reader.releaseLock(),
                };
            },
        } as AsyncIterable<T>);

/**
 * A non-currying variant of {@link withStreamAdapter}.
 * @group Adapters
 */
export const streamAdapter = <T>(stream: ReadableStream<T>) =>
    withStreamAdapter<T>()(stream);
