import type { AnyIterable } from "../../types/iterable/any-iterable";
import { isIterable } from "../type-narrowing/is-iterable";

export function assertIterable(
    value: unknown
): asserts value is AnyIterable<unknown> {
    if (!isIterable(value)) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new TypeError(`Expected an iterable but got "${value}".`);
    }
}

export const withIterableAssertion = <F extends (...args: any[]) => unknown>(
    callback: F
) => {
    return ((...args: Parameters<F>) => {
        assertIterable(args[0]);

        return callback(...args);
    }) as F;
};
