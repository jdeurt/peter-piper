/**
 * Executes the provided side-effect function and returns an unmodified version of some input value.
 * @behavior transparent
 * @example
 * using([1, 2, 3]).pipe(
 *     map(useSideEffect(console.log))
 * );
 */
export const useSideEffect =
    <T>(sideEffect: (value: T) => unknown) =>
    (value: T) => {
        sideEffect(value);

        return value;
    };
