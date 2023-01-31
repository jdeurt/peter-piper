/**
 * Creates a new iterable which's values are the result of mapping some input iterable using the provided callback function.
 */
export const map =
    <T, U>(callback: (value: T, index: number) => U) =>
    (iterable: Iterable<T>) =>
        ({
            [Symbol.iterator]: function* () {
                let index = 0;

                for (const value of iterable) {
                    yield callback(value, index++);
                }
            },
        } as Iterable<U>);
