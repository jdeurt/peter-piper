import { PPSymbol } from "../../constants";

export const isNothing = (value: unknown): value is typeof PPSymbol.nothing => {
    return value === PPSymbol.nothing;
};
