export type FlatIterable<T, Depth extends number> = {
    done: Iterable<T>;
    recur: T extends Iterable<infer Inner>
        ? FlatIterable<
              Inner,
              [
                  -1,
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20
              ][Depth]
          >
        : Iterable<T>;
}[Depth extends -1 | 0 ? "done" : "recur"];

export type FlatAsyncIterable<T, Depth extends number> = {
    done: AsyncIterable<T>;
    recur: T extends AsyncIterable<infer Inner>
        ? FlatAsyncIterable<
              Inner,
              [
                  -1,
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20
              ][Depth]
          >
        : AsyncIterable<T>;
}[Depth extends -1 | 0 ? "done" : "recur"];
