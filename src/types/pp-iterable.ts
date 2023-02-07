import type { AsyncPredicate, Predicate } from "./predicate";
import type { CookedPipe } from "./generated/cooked-pipe";
import type { MapFn } from "./map-fn";
import type { MaybePromise } from "./maybe-promise";
import type { Reducer } from "./reducer";

export interface ExtendedIterable<T> extends Iterable<T> {
    concat: (
        ...iterables: (ExtendedIterable<T> | Iterable<T>)[]
    ) => ExtendedIterable<T>;
    consume: <U>(mapFn?: MapFn<T, U>) => U[];
    every: (predicate: Predicate<T>) => boolean;
    filter: (predicate: Predicate<T>) => ExtendedIterable<T>;
    find: (predicate: Predicate<T>) => T | undefined;
    first: (predicate?: Predicate<T>) => ExtendedIterable<T>;
    isEmpty: () => boolean;
    map: <U>(mapFn: MapFn<T, U>) => ExtendedIterable<U>;
    pipe: CookedPipe<ExtendedIterable<T>>;
    reduce: <U = T>(reducer: Reducer<T, U>, initialValue?: U) => U;
    scan: <U = T>(
        reducer: Reducer<T, U>,
        initialValue?: U
    ) => ExtendedIterable<U>;
    slice: (startIndex: number, endIndex?: number) => ExtendedIterable<T>;
    some: (predicate: Predicate<T>) => boolean;
    take: (n: number) => ExtendedIterable<T>;
    toArray: () => T[];
}

export interface ExtendedAsyncIterable<T> extends AsyncIterable<T> {
    concat: (
        ...iterables: (
            | Iterable<T>
            | AsyncIterable<T>
            | ExtendedIterable<T>
            | ExtendedAsyncIterable<T>
        )[]
    ) => ExtendedAsyncIterable<Awaited<T>>;
    consume: <U>(mapFn?: MapFn<T, U>) => Promise<U[]>;
    every: (predicate: AsyncPredicate<T>) => Promise<boolean>;
    filter: (predicate: AsyncPredicate<T>) => ExtendedAsyncIterable<Awaited<T>>;
    find: (predicate: AsyncPredicate<T>) => Promise<T | undefined>;
    first: (predicate?: AsyncPredicate<T>) => ExtendedAsyncIterable<Awaited<T>>;
    isEmpty: () => Promise<boolean>;
    map: <U>(mapFn: MapFn<T, U>) => ExtendedAsyncIterable<Awaited<U>>;
    pipe: CookedPipe<ExtendedAsyncIterable<T>>;
    reduce: <U = T>(
        reducer: Reducer<T, MaybePromise<U>>,
        initialValue?: U
    ) => Promise<U>;
    scan: <U = T>(
        reducer: Reducer<T, MaybePromise<U>>,
        initialValue?: U
    ) => ExtendedAsyncIterable<Awaited<U>>;
    slice: (
        startIndex: number,
        endIndex?: number
    ) => ExtendedAsyncIterable<Awaited<T>>;
    some: (predicate: AsyncPredicate<T>) => Promise<boolean>;
    take: (n: number) => ExtendedAsyncIterable<Awaited<T>>;
    toArray: () => Promise<T[]>;
}
