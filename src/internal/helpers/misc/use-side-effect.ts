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
    async (input: T): Promise<T> => {
        await sideEffect(input);

        return input;
    };

/**
 * A sync variant of {@link useSideEffect}.
 * @group Other helpers
 *
 * @remarks
 * Available as `useSideEffect` when imported from `peter-piper/sync`.
 */
export const useSideEffectSync =
    <T>(sideEffect: (value: T) => unknown) =>
    (input: T): T => {
        sideEffect(input);

        return input;
    };
