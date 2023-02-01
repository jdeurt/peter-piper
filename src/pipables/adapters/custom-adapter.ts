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

export const customAdapter = <U>(adapter: Adapter<undefined, U>) =>
    // eslint-disable-next-line unicorn/no-useless-undefined
    withCustomAdapter(adapter)(undefined);
