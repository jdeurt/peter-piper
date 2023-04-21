import type { ExtendedAsyncIterable } from "./extended-iterable";

/**
 * An extended async iterable that can pull from a value pool. Iterable queues can be created via the {@link [queue](helpers.queue.queue)} function.
 *
 * @template T - The type of the elements in the iterable queue.
 *
 * @property {(value: T) => void} push - Pushes a new value onto the queue, making it available for consumption.
 * @property {() => void} seal - Seals the queue, preventing new values from being pushed. The queue is marked as complete once the value pool is empty.
 * @property {() => void} close - Closes the queue, immediately marking the iterable as complete and stopping the consumption of items.
 * @property {(n?: number) => IterableQueue<T>[]} fork - Forks the queue into `n` sub-queues (default 2). Each sub-queue receives the same values as the original queue.
 */
export interface IterableQueue<T> extends ExtendedAsyncIterable<T> {
    /**
     * Pushes a new value onto the queue, making it available for consumption.
     *
     * @param {T} - The value to push onto the queue.
     */
    push: (value: T) => void;

    /**
     * Seals the queue, preventing new values from being pushed. The queue is marked as complete once the value pool is empty.
     */
    seal: () => void;

    /**
     * Closes the queue, immediately marking the iterable as complete and stopping the consumption of items.
     */
    close: () => void;

    /**
     * Forks the queue into `n` sub-queues (default 2). Each sub-queue receives the same values as the original queue.
     *
     * @param {number} - The number of sub-queues to create (default 2).
     */
    fork: (n?: number) => IterableQueue<T>[];
}
