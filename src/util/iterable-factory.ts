import * as h from "../helpers";
import type {
    ExtendedAsyncIterable,
    ExtendedIterable,
} from "../types/pp-iterable";
import { using } from "./using";

export const iterable = <T>(
    iterator: () => Iterator<T>
): ExtendedIterable<T> => ({
    [Symbol.iterator]: iterator,
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
    pipe() {
        // @ts-expect-error - Arguments should be valid
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, prefer-rest-params
        return using(this).pipe(...arguments);
    },
});

export const asyncIterable = <T>(
    iterator: () => AsyncIterator<T>
): ExtendedAsyncIterable<T> => ({
    [Symbol.asyncIterator]: iterator,
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
    toArray() {
        return h.toArray<T>()(this);
    },
    pipe() {
        // @ts-expect-error - Arguments should be valid
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, prefer-rest-params
        return using(this).pipe(...arguments);
    },
});
