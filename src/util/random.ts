import type { Range } from "../types/range";

/**
 * Generates a random integer in the given range (inclusive).
 */
export const randomInt = ([from, to]: Range, generator = Math.random) => {
    const min = Math.ceil(Math.min(from, to));
    const max = Math.floor(Math.max(from, to));

    return Math.floor(generator() * (max - min + 1)) + min;
};

/**
 * Generates a random float in the given range (inclusive).
 */
export const randomFloat = ([from, to]: Range, generator = Math.random) => {
    const min = Math.min(from, to);
    const max = Math.max(from, to);

    return generator() * (max - min) + min;
};
