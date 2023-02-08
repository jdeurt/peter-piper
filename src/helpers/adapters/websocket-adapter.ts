import type { CallbackAdapterContext } from "./callback-adapter";
import { assertWebSocket } from "../../util";
import { callbackAdapter } from "./callback-adapter";

/**
 * Creates and async iteratable that yields values from messages received from a WebSocket.
 * @group Adapters
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
 * A non-currying variant of {@link withWebSocketAdapter}.
 * @group Adapters
 */
export const webSocketAdapter = <T>(input: WebSocket) =>
    withWebSocketAdapter<T>()(input);
