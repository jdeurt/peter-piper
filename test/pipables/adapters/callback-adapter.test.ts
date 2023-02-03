import test from "ava";
import EventEmitter from "node:events";

import { callbackAdapter } from "../../../src";

test("should properly iterate through events asynchronously", async (t) => {
    const emitter = new EventEmitter();

    const eventIterator = callbackAdapter<[number, string]>(
        (ctx) => emitter.on("a", ctx.pass),
        (ctx) => emitter.removeListener("a", ctx.pass)
    )[Symbol.asyncIterator]();

    emitter.emit("a", 1, "2");
    emitter.emit("a", 100, "");
    emitter.emit("b", "garbage");

    t.deepEqual((await eventIterator.next()).value, [1, "2"]);
    t.deepEqual((await eventIterator.next()).value, [100, ""]);

    await eventIterator.return?.();

    t.deepEqual((await eventIterator.next()).done, true);
});
