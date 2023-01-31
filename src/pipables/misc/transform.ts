/**
 * Transforms some input value via the provided callback function.
 */
export const transform =
    <T, U>(callback: (value: T) => U) =>
    (value: T) =>
        callback(value);
