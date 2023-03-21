import type { AnyIterable, ElementOf } from "../../types";
import { isAsyncIterable, isSyncIterable } from "../type-narrowing";
import { fork } from "../fork";

export const getIterator = <T extends AnyIterable<unknown>>(iterable: T) =>
    fork(
        iterable,
        [isAsyncIterable, isSyncIterable],
        [
            (iterable as AsyncIterable<unknown>)[Symbol.asyncIterator],
            (iterable as Iterable<unknown>)[Symbol.iterator],
        ]
    ) as AsyncIterator<ElementOf<T>> | Iterator<ElementOf<T>>;
