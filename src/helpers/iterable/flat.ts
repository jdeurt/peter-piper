import type {
    AnyIterable,
    AnySyncIterable,
    AsExtendedAsyncIterable,
    AsExtendedIterable,
} from "../../types";
import {
    asyncIterable,
    isIterable,
    isSyncIterable,
    iterable,
    toAsyncIterable,
    withIterableAssertion,
} from "../../utils";
import type { FlatIterable } from "../../types/iterable/flat-iterable";
import { getIterator } from "../../utils/iterable/get-iterator";

/**
 * Flattens all elements of some input iterable up until the specified depth.
 * @group Lazy helpers
 * @example
 * using([[1, 2], [3, 4]]).pipe(
 *     flat(1)
 * );
 */
export const flat = <T, D extends number = 1>(depth?: D) =>
    withIterableAssertion(
        (input: AnyIterable<T>): AsExtendedAsyncIterable<FlatIterable<T, D>> =>
            asyncIterable(async function* () {
                const iterator = getIterator(input);

                depth = depth ?? (1 as D);

                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                while (true) {
                    const nextResult = await iterator.next();

                    if (nextResult.done) {
                        return;
                    }

                    if (depth === 0) {
                        yield nextResult.value;
                    } else if (isIterable(nextResult.value)) {
                        yield* toAsyncIterable(
                            flat((depth - 1) as D)(
                                nextResult.value
                            ) as AnyIterable<T>
                        );
                    } else {
                        yield nextResult.value;
                    }
                }
            }) as AsExtendedAsyncIterable<FlatIterable<T, D>>
    );

/**
 * A sync variant of {@link flat}.
 * @group Lazy helpers
 *
 * @remarks
 * Available as `flat` when imported from `peter-piper/sync`.
 */
export const flatSync = <T, D extends number = 1>(depth?: D) =>
    withIterableAssertion(
        (input: AnySyncIterable<T>): AsExtendedIterable<FlatIterable<T, D>> =>
            iterable(function* () {
                const iterator = getIterator(input);

                depth = depth ?? (1 as D);

                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                while (true) {
                    const nextResult = iterator.next();

                    if (nextResult.done) {
                        return;
                    }

                    if (depth === 0) {
                        yield nextResult.value;
                    } else if (isSyncIterable(nextResult.value)) {
                        yield* flatSync((depth - 1) as D)(
                            nextResult.value
                        ) as AnySyncIterable<T>;
                    } else {
                        yield nextResult.value;
                    }
                }
            }) as AsExtendedIterable<FlatIterable<T, D>>
    );
