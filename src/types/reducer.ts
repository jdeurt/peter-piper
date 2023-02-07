export type Reducer<T, U> = (accumulator: U, value: T, index: number) => U;
