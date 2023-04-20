import type { Adapter } from "../../types";
import { asyncIterable } from "../../utils";

/**
 * Creates a curried function that takes an input value of type T and returns an async iterable based on the provided adapter function.
 *
 * @group Adapters
 * @template T - The type of input value.
 * @template U - The type of data contained in the resulting async iterable.
 * @param {Adapter<T, U>} adapter - The adapter function to transform the input value into an async iterable.
 * @returns {(input: T) => AsyncIterable<U>} A function that takes an input value of type T and returns an AsyncIterable of U.
 *
 * @example
 * const arrayAdapter: Adapter<number[], number> = (array) => {
 *   let index = 0;
 *   return {
 *     next: () =>
 *       Promise.resolve(
 *         index < array.length
 *           ? { value: array[index++], done: false }
 *           : { value: undefined, done: true }
 *       ),
 *   };
 * };
 * const iterable = withCustomAdapter(arrayAdapter)([1, 2, 3]);
 *
 * (async () => {
 *   for await (const value of iterable) {
 *     console.log(value); // Logs 1, 2, 3
 *   }
 * })();
 */
export const withCustomAdapter =
    <T, U>(adapter: Adapter<T, U>) =>
    (input: T) =>
        asyncIterable(() => adapter(input) as AsyncIterator<U>);

/**
 * A non-currying variant of {@link withCustomAdapter}. Takes an adapter function and returns an async iterable based on the adapter.
 *
 * @group Adapters
 * @template U - The type of data contained in the resulting async iterable.
 * @param {Adapter<undefined, U>} adapter - The adapter function to transform the input value into an async iterable.
 * @returns {AsyncIterable<U>} An AsyncIterable of U generated from the adapter function.
 *
 * @example
 * const arrayAdapter: Adapter<undefined, number> = () => {
 *   let index = 0;
 *   const array = [1, 2, 3];
 *   return {
 *     next: () =>
 *       Promise.resolve(
 *         index < array.length
 *           ? { value: array[index++], done: false }
 *           : { value: undefined, done: true }
 *       ),
 *   };
 * };
 * const iterable = customAdapter(arrayAdapter);
 *
 * (async () => {
 *   for await (const value of iterable) {
 *     console.log(value); // Logs 1, 2, 3
 *   }
 * })();
 */
export const customAdapter = <U>(adapter: Adapter<undefined, U>) =>
    // eslint-disable-next-line unicorn/no-useless-undefined
    withCustomAdapter(adapter)(undefined);
