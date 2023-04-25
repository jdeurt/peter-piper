import * as pp from "../src/sync";
import type { ExtendedIterable } from "../src/internal/types";

interface JQueryLike {
    <K extends keyof HTMLElementTagNameMap>(selectors: K): ReturnType<
        ExtendedIterable<HTMLElementTagNameMap[K]>["unsafeProxy"]
    >;
    <K extends keyof SVGElementTagNameMap>(selectors: K): ReturnType<
        ExtendedIterable<SVGElementTagNameMap[K]>["unsafeProxy"]
    >;
    <K extends keyof MathMLElementTagNameMap>(selectors: K): ReturnType<
        ExtendedIterable<MathMLElementTagNameMap[K]>["unsafeProxy"]
    >;
    <E extends Element = Element>(selectors: string): ReturnType<
        ExtendedIterable<E>["unsafeProxy"]
    >;
}

const $: JQueryLike = (selectors) =>
    pp.from(document.querySelectorAll(selectors)).unsafeProxy();

const hiddenBox = $("#banner-message");

$("#button-container button")
    ._addEventListener("click", () => {
        hiddenBox._setAttribute("hidden", "false").consume();
    })
    .consume();
