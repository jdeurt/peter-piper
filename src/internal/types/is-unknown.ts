declare const _unique: unique symbol;
type Unique = typeof _unique;

export type IsUnknown<T> = (
    T & Unique extends never ? false : true
) extends true
    ? true
    : false;
