/**
 * Returns `true` is some input value is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). Returns `false` otherwise.
 * @group Greedy helpers
 * @example
 * using(1).pipe(
 *     isTruthy()
 * );
 */
export const isTruthy = () => (value: unknown) => !!value;
