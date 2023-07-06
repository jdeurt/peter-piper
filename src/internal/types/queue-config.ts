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
