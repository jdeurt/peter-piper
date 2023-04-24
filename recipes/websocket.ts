import * as pp from "../src";

const ws = new WebSocket("wss://numbers.com");

// Expect message event to contain data of type number
const provider = pp.webSocketAdapter<number>(ws);

const isLowerCaseCharCode = (x: number) => 97 <= x && x <= 122;

const transformCharCode = pp.pipe((x: number) => {
    if (isLowerCaseCharCode(x)) {
        return x - 32;
    }

    return x;
}, String.fromCharCode);

const result = pp.from(provider).pipe(
    pp.map(({ data }) => data),
    pp.map(transformCharCode)
);
