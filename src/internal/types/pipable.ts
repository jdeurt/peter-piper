// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export type Pipable<T = any, U = any> = (x: T) => U;

export type In<T extends Pipable> = Parameters<T>[0];
export type Out<T extends Pipable> = ReturnType<T>;
