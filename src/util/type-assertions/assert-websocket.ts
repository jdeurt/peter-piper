export function assertWebSocket(value: unknown): asserts value is WebSocket {
    if (!(value instanceof WebSocket)) {
        throw new TypeError(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `Expected value to be a WebSocket, but got "${value}".`
        );
    }
}
