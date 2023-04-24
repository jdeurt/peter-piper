export const hasProperty = <T extends PropertyKey>(
    obj: object,
    prop: T
): obj is { [key in T]: unknown } => {
    return Reflect.has(obj, prop);
};
