import { NOTHING } from "../constants";
import type { Nothing } from "../types";
import type { Predicate } from "../types";

// TODO: Name this something different lol
export const fork = <T, U, V>(
    value: T,
    [leftPredicate, rightPredicate]: [Predicate<T>, Predicate<T>],
    [left, right]: [(value: T) => U, (value: T) => V]
): U | V | Nothing => {
    if (leftPredicate(value)) {
        return left(value);
    }

    if (rightPredicate(value)) {
        return right(value);
    }

    return NOTHING;
};
