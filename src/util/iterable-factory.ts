import * as h from "../helpers";
import type {
    ExtendedAsyncIterable,
    ExtendedIterable,
} from "../types/iterable/extended-iterable";
import type { Pipable } from "../types";

export const iterable = <T>(
    iterator: () => Iterator<T>
): ExtendedIterable<T> => ({
    [Symbol.iterator]: iterator,

    async() {
        return h.async<T>()(this);
    },
    at(n) {
        return h.atSync<T>(n)(this);
    },
    concat(...iterables) {
        return h.concatSync(...iterables)(this);
    },
    consume(mapFn) {
        return h.consumeSync(mapFn)(this);
    },
    every(predicate) {
        return h.everySync(predicate)(this);
    },
    filter(predicate) {
        return h.filterSync(predicate)(this);
    },
    find(predicate) {
        return h.findSync(predicate)(this);
    },
    first(predicate) {
        return h.firstSync(predicate)(this);
    },
    flat<D extends number = 1>(depth?: D) {
        return h.flatSync<T, D>(depth)(this);
    },
    isEmpty() {
        return h.isEmptySync()(this);
    },
    map(mapFn) {
        return h.mapSync(mapFn)(this);
    },
    reduce(reducer, initialValue) {
        return h.reduceSync(reducer, initialValue)(this);
    },
    scan(reducer, initialValue) {
        return h.scanSync(reducer, initialValue)(this);
    },
    slice(startIndex, endIndex) {
        return h.sliceSync<T>(startIndex, endIndex)(this);
    },
    some(predicate) {
        return h.someSync(predicate)(this);
    },
    take(n) {
        return h.takeSync<T>(n)(this);
    },
    toArray() {
        return h.toArraySync<T>()(this);
    },
    pipe(...args: Pipable[]) {
        return h.using(this).pipe(...args);
    },
    // @ts-expect-error 2322 - T not being an iterable is accounted for
    zip() {
        // @ts-expect-error 2344 - T not being an iterable is accounted for
        return h.zipSync<T>()(this);
    },
});

export const asyncIterable = <T>(
    iterator: () => AsyncIterator<T>
): ExtendedAsyncIterable<T> => ({
    [Symbol.asyncIterator]: iterator,

    async() {
        return h.async<T>()(this);
    },
    at(n) {
        return h.at<T>(n)(this);
    },
    buffer(ms) {
        return h.buffer<T>(ms)(this);
    },
    concat(...iterables) {
        // ???
        // eslint-disable-next-line unicorn/prefer-spread
        return h.concat(...iterables)(this);
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
        return h.filter(predicate)(this);
    },
    find(predicate) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return h.find(predicate)(this);
    },
    first(predicate) {
        return h.first(predicate)(this);
    },
    flat<D extends number = 1>(depth?: D) {
        return h.flat<T, D>(depth)(this);
    },
    isEmpty() {
        return h.isEmpty()(this);
    },
    map(mapFn) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return h.map(mapFn)(this);
    },
    reduce(reducer, initialValue) {
        // eslint-disable-next-line unicorn/no-array-reduce, unicorn/no-array-callback-reference
        return h.reduce(reducer, initialValue)(this);
    },
    scan(reducer, initialValue) {
        return h.scan(reducer, initialValue)(this);
    },
    slice(startIndex, endIndex) {
        return h.slice<T>(startIndex, endIndex)(this);
    },
    some(predicate) {
        // eslint-disable-next-line unicorn/no-array-callback-reference
        return h.some(predicate)(this);
    },
    take(n) {
        return h.take<T>(n)(this);
    },
    throttle(ms) {
        return h.throttle<T>(ms)(this);
    },
    toArray() {
        return h.toArray<T>()(this);
    },
    pipe(...args: Pipable[]) {
        return h.using(this).pipe(...args);
    },
    // @ts-expect-error 2322 - T not being an iterable is accounted for
    zip() {
        // @ts-expect-error 2344 - T not being an iterable is accounted for
        return h.zip<T>()(this);
    },
});
