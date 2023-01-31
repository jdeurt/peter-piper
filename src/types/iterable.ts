export type AnyIterable<T> = Iterable<T> | AsyncIterable<T>;
export type AnyIterator<T, U = unknown, V = undefined> =
    | Iterator<T, U, V>
    | AsyncIterator<T, U, V>;

export type ContainedIterableType<T extends AnyIterable<unknown>> =
    T extends AnyIterable<infer U> ? U : never;
export type ContainedIteratorType<T extends AnyIterator<unknown>> =
    T extends AnyIterator<infer U> ? U : never;

export type AsSyncIterable<T extends AsyncIterable<unknown>> = Iterable<
    Promise<ContainedIterableType<T>>
>;
