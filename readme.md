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

### Greedy vs lazy

Greedy helpers do what the name implies: they fully consume whatever input is given. In the context of this library, greedy helpers will take whatever iterable is passed to them as input and only return a value once that iterable has been fully consumed. This means that greedy helpers can run infinitely if the input iterable never ends.

In contrast, lazy helpers immidiately output an iterable that can be acted on and consume a single value at a time.

In practice, this behavioral difference can be demonstrated as follows:

```js
import * as pp from "peter-piper";

const infiniteNumberGenerator = function* () {
    let i = 0;
    while (true) {
        yield i++;
    }
};

pp.using(infiniteNumberGenerator()).pipe(
    pp.map((x) => x * 2), // Lazy: immidiately passes an iterable to the next helper
    pp.consume((x) => x * 2), // Greedy: will keep pooling values until the iterable has finished

    // Since the infinite number generator never stops outputting values, `consume` will run infinitely and this helper is never reached.
    pp.useSideEffect(console.log)
);
```

### Working with sync iterables

The main focus of Peter Piper is working with AsyncIterables. However, if needed, specialized sync helpers are available via `*Sync` variations (`pp.map` vs `pp.mapSync`) and through the `/sync` path:

```js
import { using, randomInts, map } from "peter-piper/sync";

const threeRandomIntsFrom0To5 = using(randomInts([0, 5])).pipe(take(3));

// Will log 3 random integers.
for (const n of threeRandomIntsFrom0To5) {
    console.log(n);
}
```

### Extended iterables

v0.0.31 introduces the `pp.usingIterable` method, which allows you to construct iterables extended with Peter Piper iterable helpers.

Since version 0.0.31, all iterable helpers and generators return these extended iterables as well.

```js
import { usingIterable, range, filter, take } from "peter-piper/sync";

const filterPredicate = (x) => x > 0;

usingIterable([-2, -1, 0, 1, 2]).pipe(filter(filterPredicate), take(2));
// produces the same result as
usingIterable([-2, -1, 0, 1, 2]).filter(filterPredicate).take(2);
// which produces the same result as
range([-2, 2]).filter(filterPredicate).take(2);
```

## RxJS vs PP

Peter piper is by no means a suitable replacement for RxJS. However, it does offer very similar functionality as highlighted below.

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

### Building functions

```js
import * as pp from "peter-piper";

const getNumbersInRange = (from, to) =>
    pipe(
        filter((x) => x >= from),
        filter((x) => x <= to), // Iterable helpers always return iterables
        toArray() // So we convert the resuling iterable to an array.
    );

await getNumbersInRange(3, 5)([1, 2, 3, 4, 5, 6, 7]); // [3, 4, 5]
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
-   Make generic types more user-friendly.

## Authors

-   **Juan de Urtubey** - - [jdeurt](https://github.com/jdeurt)

## License

MIT © [Juan de Urtubey](https://github.com/jdeurt)
