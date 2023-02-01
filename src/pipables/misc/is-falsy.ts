/**
 * Returns `true` is some input value is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). Returns `false` otherwise.
 * @group Greedy helpers
 * @example
 * using(0).pipe(
 *     isFalsy()
 * );
 */
export const isFalsy = () => (value: unknown) => !value;
