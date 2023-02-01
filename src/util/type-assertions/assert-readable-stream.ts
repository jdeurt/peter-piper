export function assertReadableStream(
    value: unknown
): asserts value is ReadableStream {
    if (!(value instanceof ReadableStream)) {
        throw new TypeError(
            `Expected value to be a ReadableStream, but got ${typeof value}`
        );
    }
}
