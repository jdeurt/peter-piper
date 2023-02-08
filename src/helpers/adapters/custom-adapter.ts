import type { Adapter } from "../../types";
import { asyncIterable } from "../../util";

/**
 * Maps some input value to an async iterable in accordance with the provided adapter function.
 * @group Adapters
 */
export const withCustomAdapter =
    <T, U>(adapter: Adapter<T, U>) =>
    (input: T) =>
        asyncIterable(() => adapter(input) as AsyncIterator<U>);

/**
 * A non-currying variant of {@link withCustomAdapter}.
 * @group Adapters
 */
export const customAdapter = <U>(adapter: Adapter<undefined, U>) =>
    // eslint-disable-next-line unicorn/no-useless-undefined
    withCustomAdapter(adapter)(undefined);
