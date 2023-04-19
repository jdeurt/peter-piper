import { iterable } from "../../utils";

/**
 * Creates an iterable that yields a constant stream of `undefined`.
 * @group Iterable factories
 * @example
 * for (const _ of voidIterable().take(5)) {
 *     ...
 * }
 * // equivalent to
 * for (let i = 0; i < 5; i++) {
 *     ...
 * }
 */
export const voidIterable = () =>
    iterable(function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (true) {
            yield;
        }
    });
