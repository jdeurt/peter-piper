import type {
    ArrayLikePredicate,
    AsyncArrayLikePredicate,
} from "../array-like-predicate";
import type { AsyncReducer, Reducer } from "../reducer";
import type { CookedPipe } from "../generated/cooked-pipe";
import type { MapFn } from "../map-fn";
import type { MaybePromise } from "../maybe-promise";

/**
 * An iterable with additional methods.
 */
export interface ExtendedIterable<T> extends Iterable<T> {
    /**
     * Maps the iterable to an equivalent async iterable.
     * @returns An async iterable of the same type.
     */
    async: () => ExtendedAsyncIterable<Awaited<T>>;

    /**
     * Returns the nth element of the iterable.
     * @param n The index of the element to return.
     * @returns The nth element of the iterable, or `undefined` if the iterable is shorter than `n + 1` elements.
     */
    at: (n: number) => T | undefined;

    /**
     * Creates an iterable by concatenating an arbitrary number of iterables with the current iterable.
     * @param iterables The iterables to concatenate.
     * @returns An iterable containing the elements of the current iterable followed by the elements of the provided iterables.
     */
    concat: (
        ...iterables: (ExtendedIterable<T> | Iterable<T>)[]
    ) => ExtendedIterable<T>;

    /**
     * Fully consumes the iterable while passing each value to the provided callback.
     * The values returned from calling the callback function are returned as an array.
     * @param mapFn A callback function that receives the current value and index of the iterable.
     * @returns An array containing the values returned from calling the callback function.
     */
    consume: <U>(mapFn?: MapFn<T, U>) => U[];

    /**
     * Tests whether all values of the iterable satisfy the provided predicate.
     * @param predicate A predicate function that receives the current value and index of the iterable.
     * @returns `true` if all values of the iterable satisfy the provided predicate, otherwise `false`.
     */
    every: (predicate: ArrayLikePredicate<T>) => boolean;

    // TODO - Finish documentation
    filter: (predicate: ArrayLikePredicate<T>) => ExtendedIterable<T>;
    find: (predicate: ArrayLikePredicate<T>) => T | undefined;
    first: (predicate?: ArrayLikePredicate<T>) => ExtendedIterable<T>;
    forEach: (fn: (element: T, index: number) => void) => ExtendedIterable<T>;
    isEmpty: () => boolean;
    getIterator: () => Iterator<T>;
    map: <U>(mapFn: MapFn<T, U>) => ExtendedIterable<U>;
    pipe: CookedPipe<ExtendedIterable<T>>;
    reduce: <U = T>(reducer: Reducer<T, U>, initialValue?: U) => U;
    scan: <U = T>(
        reducer: Reducer<T, U>,
        initialValue?: U
    ) => ExtendedIterable<U>;
    slice: (startIndex: number, endIndex?: number) => ExtendedIterable<T>;
    some: (predicate: ArrayLikePredicate<T>) => boolean;
    take: (n: number) => ExtendedIterable<T>;
    toArray: () => T[];
}

export interface ExtendedAsyncIterable<T> extends AsyncIterable<T> {
    at: (n: number) => Promise<T | undefined>;
    buffer: (ms: number) => ExtendedAsyncIterable<Awaited<T>>;
    concat: (
        ...iterables: (
            | Iterable<T>
            | AsyncIterable<T>
            | ExtendedIterable<T>
            | ExtendedAsyncIterable<T>
        )[]
    ) => ExtendedAsyncIterable<Awaited<T>>;
    consume: <U>(mapFn?: MapFn<T, U>) => Promise<U[]>;
    every: (predicate: AsyncArrayLikePredicate<T>) => Promise<boolean>;
    filter: (
        predicate: AsyncArrayLikePredicate<T>
    ) => ExtendedAsyncIterable<Awaited<T>>;
    find: (predicate: AsyncArrayLikePredicate<T>) => Promise<T | undefined>;
    first: (
        predicate?: AsyncArrayLikePredicate<T>
    ) => ExtendedAsyncIterable<Awaited<T>>;
    forEach: (
        fn: (element: T, index: number) => MaybePromise<void>
    ) => ExtendedAsyncIterable<Awaited<T>>;
    isEmpty: () => Promise<boolean>;
    getIterator: () => AsyncIterator<T>;
    map: <U>(mapFn: MapFn<T, U>) => ExtendedAsyncIterable<Awaited<U>>;
    pipe: CookedPipe<ExtendedAsyncIterable<T>>;
    reduce: <U = T>(
        reducer: AsyncReducer<T, U>,
        initialValue?: U
    ) => Promise<U>;
    scan: <U = T>(
        reducer: AsyncReducer<T, U>,
        initialValue?: U
    ) => ExtendedAsyncIterable<Awaited<U>>;
    slice: (
        startIndex: number,
        endIndex?: number
    ) => ExtendedAsyncIterable<Awaited<T>>;
    some: (predicate: AsyncArrayLikePredicate<T>) => Promise<boolean>;
    take: (n: number) => ExtendedAsyncIterable<Awaited<T>>;
    throttle: (ms: number) => ExtendedAsyncIterable<Awaited<T>>;
    toArray: () => Promise<T[]>;
}
