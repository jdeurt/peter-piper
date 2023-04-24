import * as pp from "../src";
import { subtract } from "../src/prelude";

const ws = new WebSocket("wss://numbers.com");

// Expect message event to contain data of type number
const provider$$ = pp.webSocketAdapter<number>(ws);

const isLowerCaseCharCode = (x: number) => 97 <= x && x <= 122;

const transformCharCode = pp.pipe(
    pp.match([isLowerCaseCharCode, subtract(32)], [pp.__, pp.noop()]),
    String.fromCharCode
);

// TODO
