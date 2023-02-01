type Adapter<T, U> = (value: T) => {
    next: () => Promise<{ value: U; done: boolean }>;
    return?: () => Promise<void>;
};

/**
 * Maps some input value to an async iterable in accordance with the provided adapter function.
 */
export const withCustomAdapter =
    <T, U>(adapter: Adapter<T, U>) =>
    (value: T) =>
        ({
            [Symbol.asyncIterator]: () => adapter(value),
        } as AsyncIterable<U>);

/**
 * Maps the provided input value to an async iterable in accordance with the provided adapter function.
 */
export const customAdapter = <T, U>(value: T, adapter: Adapter<T, U>) =>
    withCustomAdapter(adapter)(value);
