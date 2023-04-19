import type { IterableQueue } from "../../types/iterable/iterable-queue";
import { asyncIterable } from "../../utils";

export const queue = <T>(): IterableQueue<T> => {
    const buffer: T[] = [];
    let resolveNext: ((value: T) => void) | undefined;

    let sealed = false;
    let closed = false;

    // eslint-disable-next-line @typescript-eslint/require-await
    const iterable = asyncIterable<T>(async function* generator() {
        while (!closed) {
            if (buffer.length > 0) {
                yield buffer.shift() as T;
            } else if (sealed) {
                closed = true;
            } else {
                yield new Promise<T>((resolve) => {
                    resolveNext = resolve;
                });
            }
        }
    });

    const push = (value: T) => {
        if (sealed || closed) {
            return;
        }

        if (resolveNext) {
            const resolve = resolveNext;
            resolveNext = undefined;
            resolve(value);
        } else {
            buffer.push(value);
        }
    };

    const seal = () => {
        sealed = true;
    };

    const close = () => {
        closed = true;
    };

    return Object.assign(iterable, { push, seal, close });
};
