export type AnyOf<T extends unknown[]> = T[number];

export type Leading<T extends unknown[]> = T extends [
    infer L extends AnyOf<T>,
    ...unknown[]
]
    ? L
    : never;

export type Last<T extends unknown[]> = T extends [
    ...unknown[],
    infer L extends AnyOf<T>
]
    ? L
    : never;

export type Head<T extends unknown[]> = T[0];
export type Tail<T extends unknown[]> = T extends [
    unknown,
    ...infer U extends T
]
    ? U
    : never;

export type Length<T extends unknown[]> = T["length"];
