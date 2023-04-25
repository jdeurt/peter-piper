import test from "ava";

import { from } from "../../src";
import { proxyElements } from "../../src/internal/utils";

test("should proxy elements in an iterable", (t) => {
    const container: number[] = [];

    const makeObj = () => ({
        addToContainer(n: number) {
            container.push(n);
        },
    });

    const iter = from(Array.from({ length: 5 }, makeObj));

    const proxied = proxyElements(iter);

    proxied._addToContainer(1).consume();

    t.deepEqual(container, [1, 1, 1, 1, 1]);
});
