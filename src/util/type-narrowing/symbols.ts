import { NOTHING } from "../../constants";

export const isNothing = (value: unknown): value is typeof NOTHING => {
    return value === NOTHING;
};
