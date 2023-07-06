[![npm version](https://badge.fury.io/js/peter-piper.svg)](https://badge.fury.io/js/peter-piper)

# Peter Piper

> A zero-dependency collection of typed composable/pipable utility functions with a focus on lazy evaluation.

This project proudly uses [ZeroVer](https://0ver.org) versioning :)

## Installation

To install, run:

```sh
$ npm install peter-piper
```

Or if you prefer using Yarn:

```sh
$ yarn add peter-piper
```

## Documentation

Documentation is available [here](https://jdeurt.github.io/peter-piper/).

## Concepts

### Curried functions

Curried functions are functions which take multiple arguments, one at a time, by returning a series of functions. In practice, this concept can be demonstated with a simple `add` function.

```ts
const add = (x: number, y: number) => x + y;

const curriedAdd = (x: number) => (y: number) => x + y;
```

All helpers in Peter Piper are curried. This implementation detail enables some neat partial function applications and the ability to construct new functions easily using PP helpers as puzzle pieces, which we'll get to later.

### Lazy vs greedy

A function is referred to as **lazy** when it performs operations on an input iterable's elements as they are yielded. Lazy functions do not immidiately consume the input iterable. Instead they provide a mapping from iterable A to iterable B.

```ts
import * as pp from "peter-piper";

const data = someExtemelyLargeIntArray;

const iterable = pp.from(someExtemelyLargeIntArray).map((x) => x * 2);

// ...
```

In the snippet above, `pp.from` and the `map` method are lazy functions. They does not immidiately consume the array, but instead create a map from the array to an iterable that some routine can eventually consume.

In contrast, a function is **greedy** when it consumes an input iterable's elements. Greedy functions will immidiately consume an iterable when called.

```ts
// ...

const calculateTransformedArray = () => iterable.toArray();

const transformedArray = await calculateTransformedArray(); // Computationally expensive!
```

### Composability above all

All helpers in Peter Piper are built with composability in mind. This enables some fun "plug-and-play" patterns that make creating reusable routines a breeze.

```ts
import * as pp from "peter-piper/sync";
import { add, mult } from "peter-piper/prelude";

const modularizedTransformation = pp.pipe<number>(
    add(1),
    mult(2),
    (x) => x.toString(),
    (str) => `n = ${str}`
);

const input = [1, 2, 3];
const output = pp.from(input).map(modularizedTransformation).toArray();

console.log(output); // Logs [4, 6, 8]
```

### Working with sync iterables

The main focus of Peter Piper is working with AsyncIterables. However, if needed, specialized sync helpers are available via `*Sync` variations (`pp.map` vs `pp.mapSync`) and through the `/sync` path:

```js
import * as pp from "peter-piper";
import * as ppSync from "peter-piper/sync";

const input = [1, 2, 3];

const awaitedArray = await pp.toArray<number>()(input); // Returns `Promise<number[]>`
const array1 = pp.toArraySync<number>()(input); // Returns `number[]`
const array2 = ppSync.toArray<number>()(input); // Returns `number[]`
```

### Extended iterables

You may have noticed that thus far we've only been dealing with simple array inputs. Arrays are cool and all, but what's the point of this unless we take it a step further?

All iterable helpers exported by Peter Piper return custom **extended iterables**. This feature becomes much more interesting when we consider the implication that Peter Piper _allows you to interact with iterables as if they were just normal arrays_.

Take the following example of a WebSocket connection that sends you an infinite stream of numbers:

```ts
const ws = new WebSocket("ws://random-numbers.com");
```

Say we want to multiply each number by 2 and store the results somewhere to be accessed later. A naive approach would involve transforming the numbers as they are received and storing them in an array like so:

```ts
const numbers: number[] = [];

ws.addEventListener("message", (event: MessageEvent<number>) => {
    numbers.push(event.data * 2);
});
```

But wait. I want to consume this data as it appears. All I've done here is push to an array that will continue growing for as long as the connection is active. Enter PP.

```ts
import * as pp from "peter-piper";

const data = pp.webSocketAdapter<number>(ws).map(({ data }) => data * 2);

// Somewhere else...
for await (const n of data) {
    console.log(n);
}
```

And that's it. You can check the [documentation](https://jdeurt.github.io/peter-piper/) to see a complete list of extended iterable helpers and methods available to you.

## RxJS vs PP

Peter Piper is by no means a suitable replacement for RxJS, nor will it ever be. However, it does offer very similar functionality as highlighted below.

### RxJS

The following snippet was taken from https://rxjs.dev/guide/observable#observable.

```ts
import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log("just before subscribe");
observable.subscribe({
    next(x) {
        console.log("got value " + x);
    },
    complete() {
        console.log("done");
    },
});
console.log("just after subscribe");
```

### PP

```ts
import { from } from "peter-piper";

const provider = from(async function* () {
    yield 1;
    yield 2;
    yield 3;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    yield 4;
});

console.log("just before subscribe");

from(provider)
    .consume((x) => console.log(`got value ${x}`))
    .then(() => console.log("done"));

console.log("just after subscribe");
```

## Example usage

### Basic usage

```js
import * as pp from "peter-piper";

const result = await pp.using([1, 2, 3]).pipe(
    pp.concat([4, 5, 6]),
    pp.filter((x) => x > 2),
    pp.map((x) => x * 2),
    pp.toArray()
);

result; // [6, 8, 10, 12]
```

### Treating streams as iterables

```js
import * as pp from "peter-piper";

const result = await pp.using(pp.streamAdapter(stream)).pipe(
    // Iterables are evaluated lazily.
    // `slice` will limit the iterations to 10.
    pp.slice(0, 10),
    pp.filter((x) => x <= 10),
    pp.toArray()
);
```

### Custom adapters

```js
import * as pp from "peter-piper";

const evenNumbers = pp.using(0).pipe(
    // `withCustomAdapter` allows us to easily create async iterables.
    pp.withCustomAdapter(
        // `startingValue` is the input.
        // In this case, 0.
        (startingValue) => {
            let currValue = startingValue;

            return {
                next: async () => currValue++;
            };
        }
    ),
    pp.filter((x) => x % 2 === 0)
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

## TODO

-   Internal `lift` refactor.
-   Fix routing helpers.

## Authors

-   **Juan de Urtubey** - - [jdeurt](https://github.com/jdeurt)

## License

MIT © [Juan de Urtubey](https://github.com/jdeurt)
