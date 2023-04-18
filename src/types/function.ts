export type GenericFunction = (...args: never[]) => unknown;

export type UnaryFunction<X, R> = (...args: [X, ...unknown[]]) => R;
