type Adapter<T, U> = (value: T) => {
    next: () => Promise<{ value: U; done: boolean }>;
    return?: () => Promise<void>;
};

/**
 * Maps some input value to an async iterable in accordance with the provided adapter function.
 * @group Adapters
 */
export const withCustomAdapter =
    <T, U>(adapter: Adapter<T, U>) =>
    (input: T) =>
        ({
            [Symbol.asyncIterator]: () => adapter(input),
        } as AsyncIterable<U>);

/**
 * A non-currying variant of {@link withCustomAdapter}.
 * @group Adapters
 */
export const customAdapter = <U>(adapter: Adapter<undefined, U>) =>
    // eslint-disable-next-line unicorn/no-useless-undefined
    withCustomAdapter(adapter)(undefined);
