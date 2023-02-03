import type { AnyIterable } from "../../types/any-iterable";
import { isIterable } from "../type-narrowing/is-iterable";

export function assertIterable(
    value: unknown
): asserts value is AnyIterable<unknown> {
    if (!isIterable(value)) {
        throw new TypeError(`Expected an iterable but got "${typeof value}".`);
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
