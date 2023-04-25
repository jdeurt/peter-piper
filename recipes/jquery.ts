import * as pp from "../src/sync";

const $ = <T extends HTMLElement = HTMLElement>(selector: string) =>
    pp.domElements<T>(selector).unsafeProxy();

const hiddenBox = $("#banner-message");

$<HTMLButtonElement>("#button-container button")
    ._addEventListener("click", () => {
        hiddenBox._setAttribute("hidden", "false").consume();
    })
    .consume();
