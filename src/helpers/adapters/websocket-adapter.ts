import type { CallbackAdapterContext } from "./callback-adapter";
import { assertWebSocket } from "../../utils";
import { callbackAdapter } from "./callback-adapter";

/**
 * Creates a curried function that takes a WebSocket as an input and returns an async iterable queue that generates values from the WebSocket's "message" events. Automatically marks the queue as sealed when the WebSocket is closed.
 *
 * @group Adapters
 * @template T - The type of data contained in the WebSocket messages.
 * @returns {(input: WebSocket) => IterableQueue<MessageEvent<T>>} A function that takes a WebSocket as input and returns an IterableQueue of MessageEvent<T>.
 *
 * @example
 * const ws = new WebSocket('ws://example.com');
 * const wsQueue = withWebSocketAdapter<{ message: string }>()(ws);
 *
 * (async () => {
 *   for await (const event of wsQueue) {
 *     console.log(event.data); // Logs WebSocket messages as they are received
 *   }
 * })();
 */
export const withWebSocketAdapter =
    <T>() =>
    (input: WebSocket) => {
        assertWebSocket(input);

        return callbackAdapter(
            (ctx: CallbackAdapterContext<[event: MessageEvent<T>]>) => {
                input.addEventListener("message", ctx.pass);
                input.addEventListener("close", ctx.kill);
            },
            (ctx) => {
                input.removeEventListener("message", ctx.pass);
                input.removeEventListener("close", ctx.kill);
            }
        );
    };

/**
 * A non-currying variant of {@link withWebSocketAdapter}. Takes a WebSocket as an input and returns an async iterable queue that generates values from the WebSocket's "message" events. Automatically marks the queue as sealed when the WebSocket is closed.
 *
 * @group Adapters
 * @template T - The type of data contained in the WebSocket messages.
 * @param {WebSocket} input - The WebSocket to adapt into an iterable queue.
 * @returns {IterableQueue<MessageEvent<T>>} An IterableQueue of MessageEvent<T> generated from the WebSocket's "message" events.
 *
 * @example
 * const ws = new WebSocket('ws://example.com');
 * const wsQueue = webSocketAdapter<{ message: string }>(ws);
 *
 * (async () => {
 *   for await (const event of wsQueue) {
 *     console.log(event.data); // Logs WebSocket messages as they are received
 *   }
 * })();
 */
export const webSocketAdapter = <T>(input: WebSocket) =>
    withWebSocketAdapter<T>()(input);
