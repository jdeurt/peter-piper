import type { AnyIterable } from "../types/any-iterable";
import type { MaybePromise } from "../types/maybe-promise";
import { toAsyncIterable } from "./to-async-iterable";

export const lift = <T, U>(
    iterable: AnyIterable<T>,
    transform: (value: T) => MaybePromise<U>
): AsyncIterable<U> => ({
    [Symbol.asyncIterator]: async function* () {
        for await (const value of toAsyncIterable(iterable)) {
            yield transform(value);
        }
    },
});
