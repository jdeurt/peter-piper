import { asyncIterable, iterable } from "../../util";

/**
 * Wraps some input value in an async iterable.
 * @group Lazy helpers
 * @example
 * using(2).pipe(
 *     wrap(),
 *     // Now we can use iterable helpers
 *     map(...)
 * );
 */
export const wrap =
    <T>() =>
    (input: T) =>
        // eslint-disable-next-line @typescript-eslint/require-await
        asyncIterable(async function* () {
            yield input;
        });

/**
 * A sync variant of {@link wrap}.
 * @group Other helpers
 *
 * @remarks
 * Available as `wrap` when imported from `peter-piper/sync`.
 */
export const wrapSync =
    <T>() =>
    (input: T) =>
        iterable(function* () {
            yield input;
        });
