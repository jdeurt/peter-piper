export const infiniteNumberGenerator = function* () {
    let i = 0;
    while (true) {
        yield i++;
    }
};
