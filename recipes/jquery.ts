import * as pp from "../src/sync";
import type { ExtendedIterable } from "../src/internal/types";

interface $Fn {
    <K extends keyof HTMLElementTagNameMap>(selectors: K): ExtendedIterable<
        HTMLElementTagNameMap[K]
    >;
    <K extends keyof SVGElementTagNameMap>(selectors: K): ExtendedIterable<
        SVGElementTagNameMap[K]
    >;
    <K extends keyof MathMLElementTagNameMap>(selectors: K): ExtendedIterable<
        MathMLElementTagNameMap[K]
    >;
    <E extends Element = Element>(selectors: string): ExtendedIterable<E>;
}

const $: $Fn = (selectors: string) =>
    pp.from(document.querySelectorAll(selectors));

$("button")
    .forEach((btn) => btn.click())
    .consume();
