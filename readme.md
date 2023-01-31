[![npm version](https://badge.fury.io/js/peter-piper.svg)](https://badge.fury.io/js/peter-piper)

# Peter Piper

> A zero-dependency collection of typed composable/pipable utility functions.

## Table of contents

-   [Peter Piper](#peter-piper)
    -   [Table of contents](#table-of-contents)
    -   [Installation](#installation)
    -   [Example usage](#example-usage)
    -   [API](#api)
        -   [Pipable helpers](#pipable-helpers)
            -   [Iterable](#iterable)
                -   [`concat<T>(...iterable: Iterable<T>)`](#conctiterablet-iterablet)
                -   [`every<T>(predicate: (value: T, index: number) => boolean)`](#everytpredicate-value-t-index-number--boolean)
                -   [`filter<T>(predicate: (value: T, index: number) => boolean)`](#filtertpredicate-value-t-index-number--boolean)
                -   [`find<T>(predicate: (value: T, index: number) => boolean)`](#findtpredicate-value-t-index-number--boolean)
                -   [`isEmpty()`](#isempty)
                -   [`map<T, U>(callback: (value: T, index: number) => U)`](#maptu-callback-value-t-index-number--u)
                -   [`pluck<P extends string[]>(...path: P)`](#pluckp-extends-stringpath-p)
                -   [`reduce<T, U = T>(callback: (accumulator: U, value: T, index: number) => U, initialValue?: U)`](#reducetu--t-callback-accumulator-u-value-t-index-number--u-initialvalue-u)
                -   [`slice<T>(startIndex: number, endIndex = Number.POSITIVE_INFINITY)`](#slicetstartindex-number-endindex--numberpositiveinfinity)
                -   [`some<T>(predicate: (value: T, index: number) => boolean)`](#sometpredicate-value-t-index-number--boolean)
                -   [`toArray<T>()`](#toarrayt)
            -   [Logic](#logic)
                -   [`fork<T extends ForkPath[]>(...paths: T)`](#forkt-extends-forkpathpaths-t)
            -   [Misc](#misc)
                -   [`deeplyEquals(y: unknown)`](#deeplyequalsy-unknown)
                -   [`equals(y: unknown)`](#equalsy-unknown)
                -   [`isFalsy()`](#isfalsy)
                -   [`isOneOf<T>(values: T[])`](#isonofvalues-t)
                -   [`isTruthy()`](#istruthy)
                -   [`pipe<T extends Pipable[]>(...args: T)`](#pipet-extends-pipableargs-t)
                -   [`transform<T, U>(callback: (value: T) => U)`](#transformtu-callback-value-t--u)
            -   [Number](#number)
                -   [`compare(op: ComparisonOperator, x: number)`](#compareop-comparisonoperator-x-number)
            -   [Object](#object)
                -   [`pick<P extends string[]>(...path: P)`](#pickp-extends-stringpath-p)
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

## Example Usage

```js
import { using, concat, filter, compare, map, toArray, isOneOf } from "peter-piper";

const result = using([1, 2, 3]).pipe(
    concat([4, 5, 6]),
    filter(compare(">", 2)),
    map((x) => x * 2)
    toArray()
);

console.log(result); // [6, 8, 10, 12]

console.log(result.filter(isOneOf([6, 10, 14]))); // [6, 10]
```

## API

### Pipable helpers

#### Iterable

##### `concat<T>(...iterable: Iterable<T>)`

Creates an iterable by concatenates an arbitrary amount of iterables to some base iterable.

##### `every<T>(predicate: (value: T, index: number) => boolean)`

Tests whether all values of some input iterable satisfy the provided predicate.

##### `filter<T>(predicate: (value: T, index: number) => boolean)`

Creates a new iterable containing all values of some input iterable that satisfy the provided predicate.

##### `find<T>(predicate: (value: T, index: number) => boolean)`

Retrieves the first value of some input iterable that satisfies the provided predicate.

##### `isEmpty()`

Returns `true` if some input iterable is empty (i.e. can' produce any values). Returns `false` otherwise.

##### `map<T, U>(callback: (value: T, index: number) => U)`

Creates a new iterable which's values are the result of mapping some input iterable using the provided callback function.

##### `pluck<P extends string[]>(...path: P)`

Creates a new iterable which's values are the properties of the values of some input iterable at the provided path.

##### `reduce<T, U = T>(callback: (accumulator: U, value: T, index: number) => U, initialValue?: U)`

Reduces some input iterable to a value using the provided callback function.
If no initial value is provided, the accumulator starts as the first value of the input iterable and the reducer is ran on the rest of the iterable's values.

##### `slice<T>(startIndex: number, endIndex = Number.POSITIVE_INFINITY)`

Creates a new iterable by slicing some input iterable from the provided start index (inclusive) to the provided end index (exclusive).
If no end index is provided, `Number.POSITIVE_INFINITY` is used instead.

##### `some<T>(predicate: (value: T, index: number) => boolean)`

Tests whether any values of some input iterable satisfy the provided predicate.

##### `toArray<T>()`

Creates a new array from the values of some input iterable.

#### Logic

##### `fork<T extends ForkPath[]>(...paths: T)`

Finds the first path pair where some input value satisfies that pair's predicate and returns the result of passing said input value to that pair's callback function.

#### Misc

##### `deeplyEquals(y: unknown)`

Returns `true` if `x` is deeply (recursively) equal to `y`. Returns `false` otherwise.

##### `equals(y: unknown)`

Returns `true` if `x` strictly equals `y`. Returns `false` otherwise.

##### `isFalsy()`

Returns `true` is some input value is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). Returns `false` otherwise.

#### `isOneOf<T>(value: T[])`

Returns `true` if some input value is present in the provided array of values. Returns `false` otherwise.

##### `isTruthy()`

Returns `true` is some input value is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). Returns `false` otherwise.

##### `pipe<T extends Pipable[]>(...args: T)`

Pipes some input value through a series of functions, returning the result.

##### `transform<T, U>(callback: (value: T) => U)`

Transforms some input value via the provided callback function.

#### Number

##### `compare(op: ComparisonOperator, x: number)`

Compares some input `n` to `x` using the provided comparison operator and returns the result of the comparison.

#### Object

##### `pick<P extends string[]>(...path: P)`

Retrieves the property of some input object at the provided path.

## TODO

-   Add support for async iterables.
-   Add support for streams.

## Authors

-   **Juan de Urtubey** - - [jdeurt](https://github.com/jdeurt)

## License

MIT © [Juan de Urtubey](https://github.com/jdeurt)
