/**
 * Executes the provided side-effect function and returns an unmodified version of some input value.
 * @group Other helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     map(useSideEffect(console.log))
 * );
 */
export const useSideEffect =
    <T>(sideEffect: (value: T) => unknown) =>
    (input: T) => {
        sideEffect(input);

        return input;
    };
