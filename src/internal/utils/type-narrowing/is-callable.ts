export const isCallable = (
    value: unknown
): value is (...args: any[]) => unknown => {
    return typeof value === "function";
};
