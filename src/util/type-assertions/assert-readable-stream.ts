export function assertReadableStream(
    value: unknown
): asserts value is ReadableStream {
    if (!(value instanceof ReadableStream)) {
        throw new TypeError(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `Expected value to be a ReadableStream, but got "${value}".`
        );
    }
}
