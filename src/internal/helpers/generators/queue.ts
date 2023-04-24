import type { IterableQueue } from "../../types/iterable/iterable-queue";
import { asyncIterable } from "../../utils";

export interface QueueConfig {
    /**
     * Called when the `<Queue>.seal` method is invoked.
     */
    onSealed?: () => void;

    /**
     * Called when the `<Queue>.close` method is invoked or when the queue has been sealed and reaches an empty pool.
     */
    onClosed?: () => void;

    /**
     * Called whenever the queue iterator finishes execution.
     */
    onFinished?: () => void;
}

/**
 * Creates an async iterable queue that can be used to push and consume values.
 * The queue provides methods to push values, seal the queue, close the queue, and fork it into multiple sub-queues.
 * The optional `QueueConfig` object allows registering callbacks for specific events, such as sealing, closing, or the iterator finishing execution.
 *
 * @group Iterable factories
 * @param {QueueConfig} [queueConfig] - An optional configuration object with callbacks for sealing, closing, and iterator finishing events.
 * @returns {IterableQueue<T>} An async iterable queue with additional methods to control the queue state and fork it into sub-queues.
 *
 * @example
 * ```ts
 * const q = queue<number>();
 *
 * q.push(1);
 * q.push(2);
 *
 * (async () => {
 *   for await (const value of q) {
 *     console.log(value); // Logs 1, 2
 *   }
 * })();
 *
 * q.seal(); // No more values can be pushed; the iterator will finish after consuming all remaining values.
 * ```
 */
export const queue = <T>({
    onSealed,
    onClosed,
    onFinished,
}: QueueConfig = {}): IterableQueue<T> => {
    const buffer: T[] = [];
    let resolveNext: ((value: T) => void) | undefined;

    let sealed = false;
    let closed = false;

    // eslint-disable-next-line @typescript-eslint/require-await
    const iterable = asyncIterable<T>(async function* generator() {
        while (!closed) {
            if (buffer.length > 0) {
                yield buffer.shift() as T;
            } else if (sealed) {
                close();
            } else {
                yield new Promise<T>((resolve) => {
                    resolveNext = resolve;
                });
            }
        }

        onFinished?.();
    });

    const push = (value: T) => {
        if (sealed || closed) {
            return;
        }

        if (resolveNext) {
            const resolve = resolveNext;
            resolveNext = undefined;
            resolve(value);
        } else {
            buffer.push(value);
        }
    };

    const seal = () => {
        sealed = true;
        onSealed?.();
    };

    const close = () => {
        closed = true;
        onClosed?.();
    };

    const fork = (n?: number) => {
        const subQueues = Array.from({ length: n ?? 2 }, () =>
            queue<T>({ onSealed, onClosed, onFinished })
        );

        void (async () => {
            for await (const value of iterable) {
                for (const q of subQueues) {
                    q.push(value);
                }
            }

            for (const q of subQueues) {
                q.seal();
            }
        })();

        return subQueues;
    };

    return Object.assign(iterable, { push, seal, close, fork });
};
