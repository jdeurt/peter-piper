peter-piper / [Exports](modules.md)

[![npm version](https://badge.fury.io/js/peter-piper.svg)](https://badge.fury.io/js/peter-piper)

# Peter Piper

> A zero-dependency collection of typed composable/pipable utility functions with a focus on lazy evaluation.

## Installation

To install, run:

```sh
$ npm install peter-piper
```

Or if you prefer using Yarn:

```sh
$ yarn add peter-piper
```

## Concepts

### Greedy vs lazy

Greedy helpers do what the name implies: they fully consume whatever input is given. In the context of this library, greedy helpers will take whatever iterable is passed to them as input and only return a value once that iterable has been fully consumed. This means that greedy helpers can run infinitely if the input iterable never ends.

In contrast, lazy helpers immidiately output an iterable that can be acted on and consume a single value at a time.

In practice, this behavioral diffirence can be demonstrated as follows:

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

## Documentation

Documentation is available [here](docs/modules.md).

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
-   Add support for Websocket -> AsyncIterable transformations.

## Authors

-   **Juan de Urtubey** - - [jdeurt](https://github.com/jdeurt)

## License

MIT © [Juan de Urtubey](https://github.com/jdeurt)
