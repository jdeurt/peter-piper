import type { AnyIterable } from "./any-iterable";

export type FlatIterable<T, Depth extends number> = {
    done: AnyIterable<T>;
    recur: T extends AnyIterable<infer Inner>
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
        : AnyIterable<T>;
}[Depth extends -1 | 0 ? "done" : "recur"];
