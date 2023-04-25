import type { ExtendedIterable, NodeFromSelector, Selector } from "../../types";
import { from } from "../from";

/**
 * Creates an extended iterable that yields DOM elements from the provided CSS selector.
 * Shorthand for `pp.from(document.querySelectorAll(selector))`.
 *
 * @group Iterable factories
 * @template T - An HTML tag name.
 * @param {T} selector - The CSS selector to use.
 * @returns An extended iterable containing the elements derived from the selector.
 *
 * @example
 * ```ts
 * const divs = domElements("div");
 *
 * for (const div of divs.take(3)) {
 *   console.log(div); // Logs 3 divs
 * }
 * ```
 */
export function domElements<T extends Selector>(
    selector: T
): ExtendedIterable<NodeFromSelector<T>>;

/**
 * Creates an extended iterable that yields DOM elements from the provided CSS selector.
 * Shorthand for `pp.from(document.querySelectorAll(selector))`.
 *
 * @group Iterable factories
 * @template T - A type satisfying the HTMLElement constraint.
 * @param {T} selector - The CSS selector to use.
 * @returns An extended iterable containing the elements derived from the selector.
 *
 * @example
 * ```ts
 * const buttons = domElements<HTMLButtonElement>("button.some-class");
 *
 * for (const div of buttons.take(3)) {
 *   console.log(div); // Logs 3 buttons
 * }
 * ```
 */
export function domElements<T extends HTMLElement = HTMLElement>(
    selector: string
): ExtendedIterable<T>;

export function domElements(selector: string) {
    return from(document.querySelectorAll(selector));
}
