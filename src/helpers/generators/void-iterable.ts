import { iterable } from "../../utils";

/**
 * Creates an infinite iterable that yields `undefined` values.
 *
 * @group Iterable factories
 * @returns {Iterable<void>} An iterable that continuously yields `undefined`.
 *
 * @example
 * for (const value of voidIterable()) {
 *     console.log(value); // Logs `undefined` indefinitely
 * }
 */
export const voidIterable = () =>
    iterable(function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while (true) {
            yield;
        }
    });
