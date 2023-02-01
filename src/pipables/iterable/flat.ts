import type {
    FlattenAsyncIterable,
    FlattenIterable,
} from "../../types/flatten-iterable.js";
import {
    isAsyncIterable,
    isIterable,
    isSyncIterable,
} from "../../util/iterable.js";
import { toAsyncIterable } from "./to-async-iterable.js";

type FlatIterable<T, D extends number> = Iterable<FlattenIterable<T, D>>;
type FlatAsyncIterable<T, D extends number> = AsyncIterable<
    FlattenAsyncIterable<T, D>
>;

/**
 * Flattens some input iterable recursively according to the provided depth value.
 */
export const flat =
    <T, D extends number = 1>(depth: D = 1 as D) =>
    (iterable: Iterable<T>): FlatIterable<T, D> =>
        ({
            [Symbol.iterator]: function* () {
                for (const item of iterable) {
                    if (depth > 0 && isIterable(item) && isSyncIterable(item)) {
                        yield* flat(depth - 1)(item);
                    } else {
                        yield item;
                    }
                }
            },
        } as FlatIterable<T, D>);

/**
 * Flattens some input async iterable recursively according to the provided depth value.
 */
export const flatAsync =
    <T, D extends number = 1>(depth: D = 1 as D) =>
    (iterable: AsyncIterable<T>): FlatAsyncIterable<T, D> =>
        ({
            [Symbol.asyncIterator]: async function* () {
                for await (const item of toAsyncIterable()(iterable)) {
                    if (
                        depth > 0 &&
                        isIterable(item) &&
                        isAsyncIterable(item)
                    ) {
                        yield* flatAsync(depth - 1)(item);
                    } else {
                        yield item;
                    }
                }
            },
        } as FlatAsyncIterable<T, D>);
