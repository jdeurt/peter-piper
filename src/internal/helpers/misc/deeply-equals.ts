export interface DeeplyEqualsOptions {
    /**
     * Whether or not `NaN === NaN` should be treated as `true`.
     */
    checkNaN: boolean;
}

/**
 * Returns `true` if some input value is deeply (recursively) equal to the provided value. Returns `false` otherwise.
 * @group Greedy helpers
 * @example
 * using(someObject).pipe(
 *     deeplyEquals(someOtherObject)
 * );
 */

export const deeplyEquals =
    (value: unknown, options?: Partial<DeeplyEqualsOptions>) =>
    // eslint-disable-next-line sonarjs/cognitive-complexity
    (input: unknown) => {
        if (input === value) {
            return true;
        }

        if (
            options?.checkNaN === true &&
            Number.isNaN(input) === Number.isNaN(value)
        ) {
            return true;
        }

        if (typeof input !== typeof value) {
            return false;
        }

        // Redundant check on RHS of `||`, but necessary for type narrowing later on.
        if (typeof input !== "object" || typeof value !== "object") {
            return false;
        }

        if (input === null || value === null) {
            return false;
        }

        if (Array.isArray(input) !== Array.isArray(value)) {
            return false;
        }

        // Also a redundant check on RHS of `&&`.
        if (Array.isArray(input) && Array.isArray(value)) {
            if (input.length !== value.length) {
                return false;
            }

            // eslint-disable-next-line unicorn/no-for-loop
            for (let i = 0; i < input.length; i++) {
                if (!deeplyEquals(value[i])(input[i])) {
                    return false;
                }
            }

            return true;
        }

        const xKeys = Object.keys(input);
        const yKeys = Object.keys(value);

        if (xKeys.length !== yKeys.length) {
            return false;
        }

        for (const key of xKeys) {
            // @ts-expect-error 7053
            // We already know `key` is a candidate key for x and y because of the creation of `xKeys` above.
            if (!deeplyEquals(value[key])(input[key])) {
                return false;
            }
        }

        return true;
    };
