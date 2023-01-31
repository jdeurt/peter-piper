type ForkPath<T = never, U = unknown> = [
    predicate: (value: T) => boolean,
    callback: (value: T) => U
];

type ForkPathInputValueType<T extends ForkPath[]> = T extends [
    infer Head extends ForkPath,
    ...infer Tail extends ForkPath[]
]
    ?
          | Parameters<Head[0]>[0]
          | Parameters<Head[1]>[0]
          | ForkPathInputValueType<Tail>
    : never;

type ForkPathReturnValueType<T extends ForkPath[]> = T extends [
    infer Head extends ForkPath,
    ...infer Tail extends ForkPath[]
]
    ? ReturnType<Head[1]> | ForkPathReturnValueType<Tail>
    : never;

/**
 * Finds the first path pair where some input value satisfies that pair's predicate and returns the result of passing said input value to that pair's callback function.
 */
export const fork =
    <T extends ForkPath[]>(...paths: T) =>
    (value: ForkPathInputValueType<T>) =>
        paths.find(([predicate]) => predicate(value))?.[1](value) as
            | ForkPathReturnValueType<T>
            | undefined;
