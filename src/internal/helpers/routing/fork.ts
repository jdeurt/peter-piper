import type {
    ForkPath,
    ForkPathInputValueType,
    ForkPathReturnValueType,
} from "../../types";

/**
 * Passes some input value to an arbitrary amount of execution paths and returns a tuple containing the result of each execution path in order.
 * @group Greedy helpers
 * @example
 * using([1, 2, 3]).pipe(
 *     fork(
 *         map((x) => x + 1),
 *         map((x) => x - 1)
 *     )
 * );
 */
export const fork =
    <T extends ForkPath[]>(...paths: T) =>
    (input: ForkPathInputValueType<T>) =>
        paths.map((path) => path(input as never)) as ForkPathReturnValueType<T>;
