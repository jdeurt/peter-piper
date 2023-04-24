export type ForkPath<T = never, U = unknown> = (value: T) => U;

export type ForkPathInputValueType<T extends ForkPath[]> = T extends ForkPath<
    infer U
>[]
    ? U
    : never;

export type ForkPathReturnValueType<T extends ForkPath[]> = T extends [
    infer Head extends ForkPath,
    ...infer Tail extends ForkPath[]
]
    ? [ReturnType<Head>, ...ForkPathReturnValueType<Tail>]
    : [];
