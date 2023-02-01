type ForkPath<T = never, U = unknown> = (value: T) => U;

type ForkPathInputValueType<T extends ForkPath[]> = T extends ForkPath<
    infer U
>[]
    ? U
    : never;

type ForkPathReturnValueType<T extends ForkPath[]> = T extends [
    infer Head extends ForkPath,
    ...infer Tail extends ForkPath[]
]
    ? [ReturnType<Head>, ...ForkPathReturnValueType<Tail>]
    : [];

/**
 * Passes some input value to an arbitrary amount of execution paths and returns a tuple containing the result of each execution path in order.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     fork(
 *         map((x) => x + 1),
 *         map((x) => x - 1)
 *     )
 * );
 */
export const fork =
    <T extends ForkPath[]>(...paths: T) =>
    (value: ForkPathInputValueType<T>) =>
        paths.map((path) => path(value as never)) as ForkPathReturnValueType<T>;
