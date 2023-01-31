/**
 * Returns `true` if some input value is present in the provided array of values. Returns `false` otherwise.
 */
export const isOneOf =
    <T>(values: T[]) =>
    (value: T) =>
        values.includes(value);
