import { assertReadableStream, asyncIterable } from "../../utils";

/**
 * Creates a curried function that takes a ReadableStream as an input and returns an async iterable that generates values from the stream.
 *
 * @group Adapters
 * @template T - The type of data contained in the ReadableStream.
 * @returns {(input: ReadableStream<T>) => AsyncIterable<T>} A function that takes a ReadableStream as input and returns an AsyncIterable of T.
 *
 * @example
 * const stream = new ReadableStream({
 *   start(controller) {
 *     controller.enqueue('Hello');
 *     controller.close();
 *   },
 * });
 * const streamIterable = withStreamAdapter<string>()(stream);
 *
 * (async () => {
 *   for await (const value of streamIterable) {
 *     console.log(value); // Logs "Hello"
 *   }
 * })();
 */
export const withStreamAdapter =
    <T>() =>
    (input: ReadableStream<T>) => {
        assertReadableStream(input);

        return asyncIterable(() => {
            const reader = input.getReader();

            return {
                next: () => reader.read(),
                return: () => reader.releaseLock(),
            } as AsyncIterator<T>;
        });
    };

/**
 * A non-currying variant of {@link withStreamAdapter}. Takes a ReadableStream as an input and returns an async iterable that generates values from the stream.
 *
 * @group Adapters
 * @template T - The type of data contained in the ReadableStream.
 * @param {ReadableStream<T>} stream - The ReadableStream to adapt into an async iterable.
 * @returns {AsyncIterable<T>} An AsyncIterable of T generated from the ReadableStream.
 *
 * @example
 * const stream = new ReadableStream({
 *   start(controller) {
 *     controller.enqueue('Hello');
 *     controller.close();
 *   },
 * });
 * const streamIterable = streamAdapter<string>(stream);
 *
 * (async () => {
 *   for await (const value of streamIterable) {
 *     console.log(value); // Logs "Hello"
 *   }
 * })();
 */
export const streamAdapter = <T>(stream: ReadableStream<T>) =>
    withStreamAdapter<T>()(stream);
