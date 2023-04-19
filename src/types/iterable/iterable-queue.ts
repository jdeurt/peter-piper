import type { ExtendedAsyncIterable } from "./extended-iterable";

/**
 * An extended async iterable that can pull from a value pool.
 */
export type IterableQueue<T> = ExtendedAsyncIterable<T> & {
    /**
     * Pushes a new value onto the queue.
     */
    push: (value: T) => void;

    /**
     * Seals the queue, preventing new values from being pushed and marking it as complete once the value pool is empty.
     */
    seal: () => void;

    /**
     * Closes the queue, immediately marking the iterable as complete.
     */
    close: () => void;

    /**
     * Forks the queue into `n` sub-queues (default 2).
     */
    fork: (n?: number) => IterableQueue<T>[];
};
