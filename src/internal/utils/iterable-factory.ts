import * as h from "../helpers";
import type {
    ExtendedAsyncIterable,
    ExtendedIterable,
} from "../types/iterable/extended-iterable";
import type { Pipable } from "../types";
import { getIterator } from "./iterable";

export const iterable = <T>(iterator: () => Iterator<T>): Iterable<T> => ({
    [Symbol.iterator]: iterator,
});

export const asyncIterable = <T>(
    asyncIterator: () => AsyncIterator<T>
): AsyncIterable<T> => ({
    [Symbol.asyncIterator]: asyncIterator,
});

/**
 * Creates a new extended iterable.
 */
export const xIterable = <T>(
    iterator: () => Iterator<T>
): ExtendedIterable<T> => ({
    [Symbol.iterator]: iterator,

    async() {
        return xAsyncIterable(h.async<T>()(this)[Symbol.asyncIterator]);
    },
    at(n) {
        return h.atSync<T>(n)(this);
    },
    concat(...iterables) {
        return xIterable(h.concatSync(...iterables)(this)[Symbol.iterator]);
    },
    consume(mapFn) {
        return h.consumeSync(mapFn)(this);
    },
    every(predicate) {
        return h.everySync(predicate)(this);
    },
    filter(predicate) {
        return xIterable(h.filterSync(predicate)(this)[Symbol.iterator]);
    },
    find(predicate) {
        return h.findSync(predicate)(this);
    },
    first(predicate) {
        return xIterable(h.firstSync(predicate)(this)[Symbol.iterator]);
    },
    forEach(fn) {
        return xIterable(h.forEachSync(fn)(this)[Symbol.iterator]);
    },
    isEmpty() {
        return h.isEmptySync()(this);
    },
    getIterator() {
        return getIterator(this);
    },
    map(mapFn) {
        return xIterable(h.mapSync(mapFn)(this)[Symbol.iterator]);
    },
    reduce(reducer, initialValue) {
        return h.reduceSync(reducer, initialValue)(this);
    },
    scan(reducer, initialValue) {
        return xIterable(
            h.scanSync(reducer, initialValue)(this)[Symbol.iterator]
        );
    },
    slice(startIndex, endIndex) {
        return xIterable(
            h.sliceSync<T>(startIndex, endIndex)(this)[Symbol.iterator]
        );
    },
    some(predicate) {
        return h.someSync(predicate)(this);
    },
    take(n) {
        return xIterable(h.takeSync<T>(n)(this)[Symbol.iterator]);
    },
    toArray() {
        return h.toArraySync<T>()(this);
    },
    pipe(...args: Pipable[]) {
        return h.pipe(...args)(this);
    },
});

/**
 * Creates a new extended async iterable.
 */
export const xAsyncIterable = <T>(
    iterator: () => AsyncIterator<T>
): ExtendedAsyncIterable<T> => ({
    [Symbol.asyncIterator]: iterator,

    at(n) {
        return h.at<T>(n)(this);
    },
    buffer(ms) {
        return xAsyncIterable(h.buffer<T>(ms)(this)[Symbol.asyncIterator]);
    },
    concat(...iterables) {
        return xAsyncIterable(
            // eslint-disable-next-line unicorn/prefer-spread
            h.concat(...iterables)(this)[Symbol.asyncIterator]
        );
    },
    consume(mapFn) {
        return h.consume(mapFn)(this);
    },
    every(predicate) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return h.every(predicate)(this);
    },
    filter(predicate) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return xAsyncIterable(h.filter(predicate)(this)[Symbol.asyncIterator]);
    },
    forEach(fn) {
        // eslint-disable-next-line unicorn/no-array-for-each, unicorn/no-array-callback-reference
        return xAsyncIterable(h.forEach(fn)(this)[Symbol.asyncIterator]);
    },
    find(predicate) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return h.find(predicate)(this);
    },
    first(predicate) {
        return xAsyncIterable(h.first(predicate)(this)[Symbol.asyncIterator]);
    },
    isEmpty() {
        return h.isEmpty()(this);
    },
    getIterator() {
        return getIterator(this);
    },
    map(mapFn) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return xAsyncIterable(h.map(mapFn)(this)[Symbol.asyncIterator]);
    },
    reduce(reducer, initialValue) {
        // eslint-disable-next-line unicorn/no-array-reduce, unicorn/no-array-callback-reference
        return h.reduce(reducer, initialValue)(this);
    },
    scan(reducer, initialValue) {
        return xAsyncIterable(
            h.scan(reducer, initialValue)(this)[Symbol.asyncIterator]
        );
    },
    slice(startIndex, endIndex) {
        return xAsyncIterable(
            h.slice<T>(startIndex, endIndex)(this)[Symbol.asyncIterator]
        );
    },
    some(predicate) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return h.some(predicate)(this);
    },
    take(n) {
        return xAsyncIterable(h.take<T>(n)(this)[Symbol.asyncIterator]);
    },
    throttle(ms) {
        return xAsyncIterable(h.throttle<T>(ms)(this)[Symbol.asyncIterator]);
    },
    toArray() {
        return h.toArray<T>()(this);
    },
    pipe(...args: Pipable[]) {
        return h.pipe(...args)(this);
    },
});
