/**
 * Returns `true` if `x` is deeply (recursively) equal to `y`. Returns `false` otherwise.
 * @group Greedy helpers
 * @example
 * using(someObject).pipe(
 *     deeplyEquals(someOtherObject)
 * );
 */
// eslint-disable-next-line sonarjs/cognitive-complexity
export const deeplyEquals = (y: unknown) => (x: unknown) => {
    if (x === y) {
        return true;
    }

    if (typeof x !== typeof y) {
        return false;
    }

    // Redundant check on RHS of `||`, but necessary for type narrowing later on.
    if (typeof x !== "object" || typeof y !== "object") {
        return false;
    }

    if (x === null || y === null) {
        return false;
    }

    if (Array.isArray(x) !== Array.isArray(y)) {
        return false;
    }

    // Also a redundant check on RHS of `&&`.
    if (Array.isArray(x) && Array.isArray(y)) {
        if (x.length !== y.length) {
            return false;
        }

        // eslint-disable-next-line unicorn/no-for-loop
        for (let i = 0; i < x.length; i++) {
            if (!deeplyEquals(y[i])(x[i])) {
                return false;
            }
        }

        return true;
    }

    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);

    if (xKeys.length !== yKeys.length) {
        return false;
    }

    for (const key of xKeys) {
        // @ts-expect-error - We already know `key` is a candidate key for x and y because of the creation of `xKeys` above.
        if (!deeplyEquals(y[key])(x[key])) {
            return false;
        }
    }

    return true;
};
