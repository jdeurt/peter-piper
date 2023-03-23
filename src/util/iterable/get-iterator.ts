import type { AnyIterable, AnySyncIterable, ElementOf } from "../../types";
import { isAsyncIterable, isSyncIterable } from "../type-narrowing";
import { fork } from "../fork";
import { withIterableAssertion } from "../type-assertions";

export const getIterator = withIterableAssertion(
    <T extends AnyIterable<unknown>>(iterable: T) =>
        fork(
            iterable,
            [isAsyncIterable, isSyncIterable],
            [
                (iter) =>
                    (iter as AsyncIterable<unknown>)[Symbol.asyncIterator](),
                (iter) => (iter as Iterable<unknown>)[Symbol.iterator](),
            ]
        ) as T extends AnySyncIterable<unknown>
            ? Iterator<ElementOf<T>>
            : AsyncIterator<ElementOf<T>>
);