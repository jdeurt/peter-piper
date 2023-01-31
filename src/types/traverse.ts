export type Traverse<O, P extends unknown[]> = P extends [
    infer Head,
    ...infer Tail
]
    ? Head extends keyof O
        ? Tail extends []
            ? O[Head]
            : Traverse<O[Head], Tail>
        : undefined
    : O;
