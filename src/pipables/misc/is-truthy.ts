/**
 * Returns `true` is some input value is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). Returns `false` otherwise.
 * @behavior greedy
 * @example
 * using(1).pipe(
 *     isTruthy()
 * );
 */
export const isTruthy = () => (value: unknown) => !!value;
