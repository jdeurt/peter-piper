import * as pp from "../src/sync";

const $ = <T extends HTMLElement = HTMLElement>(selector: string) =>
    pp.domNodesFrom<T>(selector).unsafeProxy();

const hiddenBox = $("#banner-message");

$("#button-container button")
    ._addEventListener("click", () => {
        hiddenBox._setAttribute("hidden", "false").consume();
    })
    .consume();
