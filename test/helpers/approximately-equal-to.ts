export const approximatelyEqualTo =
    (value: number, epsilon = 0.0001) =>
    (input: number) =>
        Math.abs(input - value) < epsilon;
