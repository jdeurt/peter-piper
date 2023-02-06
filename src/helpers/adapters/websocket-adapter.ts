import type { CallbackAdapterContext } from "./callback-adapter";
import { assertWebSocket } from "../../util/type-assertions/assert-websocket";
import { callbackAdapter } from "./callback-adapter";

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

export const webSocketAdapter = <T>(input: WebSocket) =>
    withWebSocketAdapter<T>()(input);
