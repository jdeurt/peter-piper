import type { AnyIterable, ProxiedIterable } from "../../types";
import { asyncIterable, iterable } from "../iterable-factory";
import { isAsyncIterable } from "../type-narrowing";

export const proxyElements = <T extends AnyIterable<unknown>>(
    input: T
): ProxiedIterable<T> => {
    const extended = isAsyncIterable(input)
        ? asyncIterable(input[Symbol.asyncIterator])
        : iterable(input[Symbol.iterator]);

    const ownKeys = new Set(
        Reflect.ownKeys(extended).filter(
            (k) => typeof k !== "symbol"
        ) as string[]
    );

    return new Proxy({} as ProxiedIterable<T>, {
        get(_, p) {
            if (typeof p === "symbol") {
                return;
            }

            if (ownKeys.has(p)) {
                return extended[p as keyof typeof extended];
            }

            return (...args: any[]) =>
                // @ts-expect-error Too lazy to properly type check this right now
                // eslint-disable-next-line unicorn/no-array-for-each, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
                extended.forEach((element) => element[p.slice(1)](...args));
        },
    });
};
