import type {
    ExtendedAsyncIterable,
    ExtendedIterable,
} from "./extended-iterable";
import type { AnyIterable } from "./any-iterable";
import type { ElementOf } from "./element-of";
import type { GenericFunction } from "../function";

/**
 * Represents an extended iterable that exposes methods present in the input iterable type's elements.
 * Calling `_method(...)` on a ProxiedIterable is effectively the same as calling `<ExtendedIterable>.forEach((element) => element.method(...))`
 *
 * @example
 * ```ts
 * const $button = from(document.querySelectorAll("button")).unsafeProxy();
 *
 * $button._click().consume();
 * // Same as
 * $button.forEach((element) => element.click()).consume();
 * ```
 */
export type ProxiedIterable<T extends AnyIterable<unknown>> =
    (T extends AsyncIterable<unknown>
        ? ExtendedAsyncIterable<ElementOf<T>>
        : ExtendedIterable<ElementOf<T>>) &
        (T extends AnyIterable<infer E extends object>
            ? {
                  [K in keyof Omit<E, symbol> as E[K] extends GenericFunction
                      ? `_${K}`
                      : never]: E[K] extends GenericFunction
                      ? (...args: Parameters<E[K]>) => ProxiedIterable<T>
                      : never;
              }
            : never);
