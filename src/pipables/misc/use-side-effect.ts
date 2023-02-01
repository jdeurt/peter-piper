/**
 * Executes the provided side-effect function and returns an unmodified version of some input value.
 */
export const useSideEffect =
    <T>(sideEffect: (value: T) => unknown) =>
    (value: T) => {
        sideEffect(value);

        return value;
    };
