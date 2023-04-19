import * as pp from "../src";

const keysIterable = pp
    .callbackAdapter<[KeyboardEvent]>(
        // Factory
        (ctx) => document.addEventListener("keydown", ctx.pass)
    )
    .map(([event]) => event.key);

const keysPressed = await pp
    .from(keysIterable)
    .pipe(
        pp.take(5),
        pp.map(pp.useSideEffect((key) => console.log(`Pressed ${key}!`))),
        pp.toArray()
    );

console.log(`The 5 keys pressed were ${keysPressed.join(", ")}.`);
