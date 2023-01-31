/**
 * Returns `true` if some input iterable is empty (i.e. can't produce any values). Returns `false` otherwise.
 */
export const isEmpty = () => (value: Iterable<unknown>) =>
    Boolean(value[Symbol.iterator]().next().done);
