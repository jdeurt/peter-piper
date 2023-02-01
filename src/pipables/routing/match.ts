type MatchPath<T = never, U = unknown> = [
    predicate: (value: T) => boolean,
    callback: (value: T) => U
];

type MatchPathInputValueType<T extends MatchPath[]> = T extends [
    infer Head extends MatchPath,
    ...infer Tail extends MatchPath[]
]
    ?
          | Parameters<Head[0]>[0]
          | Parameters<Head[1]>[0]
          | MatchPathInputValueType<Tail>
    : never;

type MatchPathReturnValueType<T extends MatchPath[]> = T extends [
    infer Head extends MatchPath,
    ...infer Tail extends MatchPath[]
]
    ? ReturnType<Head[1]> | MatchPathReturnValueType<Tail>
    : never;

/**
 * Finds the first path pair where some input value satisfies that pair's predicate and returns the result of passing said input value to that pair's callback function.
 * @behavior greedy
 * @example
 * using(1).pipe(
 *     match(
 *         [equals(0), (x) => x + 1],
 *         [equals(1), (x) => x - 1]
 *     )
 * );
 */
export const match =
    <T extends MatchPath[]>(...paths: T) =>
    (value: MatchPathInputValueType<T>) =>
        paths.find(([predicate]) => predicate(value))?.[1](value) as
            | MatchPathReturnValueType<T>
            | undefined;
