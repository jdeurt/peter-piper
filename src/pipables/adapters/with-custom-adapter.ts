type Adapter<T, U> = (value: T) => {
    next: () => Promise<{ value: U; done: boolean }>;
    return?: () => Promise<void>;
};

/**
 * Maps some input value to an equivalent async iterable.
 */
export const withCustomAdapter =
    <T, U>(adapter: Adapter<T, U>) =>
    (value: T) =>
        ({
            [Symbol.asyncIterator]: () => adapter(value),
        } as AsyncIterable<U>);
