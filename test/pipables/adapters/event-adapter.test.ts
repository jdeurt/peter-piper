import test from "ava";
import EventEmitter from "node:events";

import { eventAdapter } from "../../../src/index.js";

test("should properly iterate through events asynchronously", async (t) => {
    const emitter = new EventEmitter();

    const eventIterator = eventAdapter<[number, string]>(
        (handler) => emitter.on("a", handler),
        (handler) => emitter.removeListener("a", handler)
    )[Symbol.asyncIterator]();

    emitter.emit("a", 1, "2");
    emitter.emit("a", 100, "");
    emitter.emit("b", "garbage");

    t.deepEqual((await eventIterator.next()).value, [1, "2"]);
    t.deepEqual((await eventIterator.next()).value, [100, ""]);

    await eventIterator.return?.();

    t.deepEqual((await eventIterator.next()).done, true);
});
