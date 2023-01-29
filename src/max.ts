export const max = (...ns: number[]) => {
    let result: number = Number.NEGATIVE_INFINITY;

    for (const n of ns) {
        if (n > result) {
            result = n;
        }
    }

    return result;
};
