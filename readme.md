[![npm version](https://badge.fury.io/js/peter-piper.svg)](https://badge.fury.io/js/peter-piper)

# Peter Piper

> A zero-dependency collection of typed composable/pipable utility functions with a focus on lazy evaluation.

## Table of contents

-   [Peter Piper](#peter-piper)
    -   [Table of contents](#table-of-contents)
    -   [Installation](#installation)
    -   [Example usage](#example-usage)
        -   [Basic usage](#basic-usage)
        -   [Building functions](#building-functions)
        -   [Treating streams as iterables](#treating-streams-as-iterables)
        -   [Custom adapters](#custom-adapters)
    -   [API](#api)
        -   [Adapters](#adapters)
            -   [withCustomAdapter](#withcustomadaptert-uadapter-adaptert-u)
            -   [withEventAdapter](#witheventadaptert-u-extends-unknownfactory-factoryfnt-u-cleanup-cleanupfnt-u)
            -   [withStreamAdapter](#withstreamadaptert)
        -   [Iterable helpers](#iterable-helpers)
            -   [concat](#conctiterablet-iterablet)
            -   [every](#everytpredicate-value-t-index-number--boolean)
            -   [filter](#filtertpredicate-value-t-index-number--boolean)
            -   [find](#findtpredicate-value-t-index-number--boolean)
            -   [isEmpty](#isempty)
            -   [map](#maptu-callback-value-t-index-number--u)
            -   [pluck](#pluckp-extends-stringpath-p)
            -   [reduce](#reducetu--t-callback-accumulator-u-value-t-index-number--u-initialvalue-u)
            -   [slice](#slicetstartindex-number-endindex--numberpositiveinfinity)
            -   [some](#sometpredicate-value-t-index-number--boolean)
            -   [toArray](#toarrayt)
            -   [toAsyncIterable](#toasynciterablet)
        -   [Logic helpers](#logic-helpers)
            -   [fork](#forkt-extends-forkpathpaths-t)
        -   [Misc helpers](#misc-helpers)
            -   [deeplyEquals](#deeplyequalsy-unknown)
            -   [equals](#equalsy-unknown)
            -   [isFalsy](#isfalsy)
            -   [isOneOf](#isonofvalues-t)
            -   [isTruthy](#istruthy)
            -   [pipe](#pipet-extends-pipableargs-t)
            -   [transform](#transformtu-callback-value-t--u)
        -   [Number helpers](#number-helpers)
            -   [compare](#compareop-comparisonoperator-x-number)
        -   [Object helpers](#object-helpers)
            -   [pick](#pickp-extends-stringpath-p)
    -   [Authors](#authors)
    -   [License](#license)

## Installation

To install, run:

```sh
$ npm install peter-piper
```

Or if you prefer using Yarn:

```sh
$ yarn add peter-piper
```

## Example usage

### Basic usage

```js
import { using, concat, filter, compare, map, toArray } from "peter-piper";

const result = using([1, 2, 3]).pipe(
    concat([4, 5, 6]),
    filter(compare(">", 2)),
    map((x) => x * 2),
    toArray()
);

result; // [6, 8, 10, 12]
```

### Building functions

```js
import { pipe, filter, compare } from "peter-piper";

const getNumbersInRange = (from, to) =>
    pipe(
        filter(compare(">=", from)),
        filter(compare("<=", to)), // Iterable helpers always return iterables
        toArray() // So we convert the resuling iterable to an array.
    );

getNumbersInRange(3, 5)([1, 2, 3, 4, 5, 6, 7]); // [3, 4, 5]
```

### Treating streams as iterables

```js
import {
    using,
    streamToAsyncIterable,
    sliceAsync,
    filterAsync,
    compare,
    toArrayAsync,
} from "peter-piper";

const result = await using(stream).pipe(
    streamToAsyncIterable(),
    // Iterables are evaluated lazyily.
    // `sliceAsync` will just limit the iterations to 10 below.
    sliceAsync(0, 10),
    filterAsync(compare("<", 0)),
    toArrayAsync()
);
```

### Custom adapters

```js
import { using, withCustomAdapter, filterAsync } from "peter-piper";

const evenNumbers = using(0).pipe(
    // withCustomAdapter allows us to easily create async iterables
    withCustomAdapter(
        // `startingValue` is the input.
        // In this case, 0.
        (startingValue) => {
            let currValue = startingValue;

            return {
                next: async () => currValue++;
            };
        }
    ),
    filterAsync((x) => x % 2 === 0)
);

for await (const n of evenNumbers) {
    console.log(n);
}

// 0
// 2
// 4
// 6
// 8
// ...and so on
```

## API

### Adapters

#### `withCustomAdapter<T, U>(adapter: Adapter<T, U>)`

Maps some input value to an equivalent async iterable.

#### `withEventAdapter<T, U extends unknown[]>(factory: FactoryFn<T, U>, cleanup: CleanupFn<T, U>)`

Creates an async iterable representation of some event target's events.

**Usage**

```ts
using(someEventTarget).pipe(
    withEventAdapter<typeof someEventTarget, [SomeEvent]>(
        (target, handler) => target.on("event", handler),
        (target, handler) => target.removeListener("event", handler)
    ),
    pluck("data"),
    (data) => console.log(data)
);
```

#### `withStreamAdapter<T>()`

Maps some input stream to an equivalent async iterable.

**Usage**

```ts
using(readableStream).pipe(
    withStreamAdapter<string>(),
    toArrayAsync(),
    transform((arr) => arr.join())
);
```

### Iterable helpers

#### `concat<T>(...iterable: Iterable<T>)`

Creates an iterable by concatenating an arbitrary amount of iterables to some base iterable. Has an async variant.

#### `every<T>(predicate: (value: T, index: number) => boolean)`

Tests whether all values of some input iterable satisfy the provided predicate. Has an async variant.

#### `filter<T>(predicate: (value: T, index: number) => boolean)`

Creates a new iterable containing all values of some input iterable that satisfy the provided predicate. Has an async variant.

#### `find<T>(predicate: (value: T, index: number) => boolean)`

Retrieves the first value of some input iterable that satisfies the provided predicate. Has an async variant.

#### `isEmpty()`

Returns `true` if some input iterable is empty (i.e. can' produce any values). Returns `false` otherwise. Has an async variant.

#### `map<T, U>(callback: (value: T, index: number) => U)`

Creates a new iterable which's values are the result of mapping some input iterable using the provided callback function. Has an async variant.

#### `pluck<P extends string[]>(...path: P)`

Creates a new iterable which's values are the properties of the values of some input iterable at the provided path. Has an async variant.

#### `reduce<T, U = T>(callback: (accumulator: U, value: T, index: number) => U, initialValue?: U)`

Reduces some input iterable to a value using the provided callback function.
If no initial value is provided, the accumulator starts as the first value of the input iterable and the reducer is ran on the rest of the iterable's values.
Has an async variant.

#### `slice<T>(startIndex: number, endIndex = Number.POSITIVE_INFINITY)`

Creates a new iterable by slicing some input iterable from the provided start index (inclusive) to the provided end index (exclusive).
If no end index is provided, `Number.POSITIVE_INFINITY` is used instead.
Has an async variant.

#### `some<T>(predicate: (value: T, index: number) => boolean)`

Tests whether any values of some input iterable satisfy the provided predicate. Has an async variant.

#### `toArray<T>()`

Creates a new array from the values of some input iterable. Has an async variant.

#### `toAsyncIterable<T>()`

Maps some input iterable to an equivalent async iterable.

### Logic helpers

#### `fork<T extends ForkPath[]>(...paths: T)`

Finds the first path pair where some input value satisfies that pair's predicate and returns the result of passing said input value to that pair's callback function.

### Misc helpers

#### `deeplyEquals(y: unknown)`

Returns `true` if `x` is deeply (recursively) equal to `y`. Returns `false` otherwise.

#### `equals(y: unknown)`

Returns `true` if `x` strictly equals `y`. Returns `false` otherwise.

#### `isFalsy()`

Returns `true` is some input value is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). Returns `false` otherwise.

#### `isOneOf<T>(value: T[])`

Returns `true` if some input value is present in the provided array of values. Returns `false` otherwise.

#### `isTruthy()`

Returns `true` is some input value is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). Returns `false` otherwise.

#### `pipe<T extends Pipable[]>(...args: T)`

Pipes some input value through a series of functions, returning the result.

#### `transform<T, U>(callback: (value: T) => U)`

Transforms some input value via the provided callback function. Has an async variant.

### Number helpers

#### `compare(op: ComparisonOperator, x: number)`

Compares some input `n` to `x` using the provided comparison operator and returns the result of the comparison.

### Object helpers

#### `pick<P extends string[]>(...path: P)`

Retrieves the property of some input object at the provided path.

## TODO

-   Add runtime type-safety.
-   Add support for Websocket -> AsyncIterable transformations.
-   Add support for CJS.

## Authors

-   **Juan de Urtubey** - - [jdeurt](https://github.com/jdeurt)

## License

MIT © [Juan de Urtubey](https://github.com/jdeurt)
