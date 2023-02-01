import type { Traverse } from "../../types/traverse.js";

/**
 * Retrieves the property of some input object at the provided path.
 * @group Greedy helpers
 * @example
 * using({ a: { b: 1 } }).pipe(
 *     pick("a", "b")
 * );
 */
export const pick =
    <P extends string[]>(...path: P) =>
    <O>(input: O): Traverse<O, P> => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let curr: any = input;

        try {
            for (const key of path) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                curr = curr[key as keyof typeof curr];
            }

            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return curr;
        } catch {
            return undefined as Traverse<O, P>;
        }
    };
