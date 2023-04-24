export type Adapter<T, U> = (value: T) => {
    next: () => Promise<{ value: U; done: boolean }>;
    return?: () => Promise<void>;
};
