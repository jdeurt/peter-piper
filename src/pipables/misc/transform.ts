/**
 * Transforms some input value via the provided callback function.
 */
export const transform =
    <T, U>(callback: (value: T) => U) =>
    (value: T) =>
        callback(value);

/**
 * Transforms some input asynchronously value via the provided callback function.
 * Useful for running a promise through a pipe.
 */
export const transformAsync =
    <T, U>(callback: (value: T) => U) =>
    (promise: Promise<T>) =>
        promise.then(callback);
