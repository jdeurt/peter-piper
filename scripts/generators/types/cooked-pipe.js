import { writeFileSync } from "node:fs";

const getLetter = (i) => String.fromCharCode(65 + i);

const makeGenericParams = (i) => {
    if (i === 0) {
        return "A extends Pipable<In>";
    }

    return `${makeGenericParams(i - 1)}, ${getLetter(
        i
    )} extends Pipable<Out<${getLetter(i - 1)}>>`;
};

const makeArgsArray = (i) => {
    if (i === 0) {
        return "A";
    }

    return `${makeArgsArray(i - 1)}, ${getLetter(i)}`;
};

const makeOverloadSignature = (i) =>
    `<${makeGenericParams(i)}>(...args: [${makeArgsArray(i)}]): Out<${getLetter(
        i
    )}>;`;

let result =
    "/* THIS FILE WAS AUTOMATICALLY GENERATED BY `scripts/generators/types/cooked-pipe.js` */\n";
result += "/* DO NOT MODIFY THIS FILE */\n\n";
result += 'import type { Out, Pipable } from "../pipable.js";\n\n';

result += "export interface CookedPipe<In> {\n";
for (let i = 0; i < 26; i++) {
    result += `${makeOverloadSignature(i)}\n`;
}
result += "};";

writeFileSync("./src/types/generated/cooked-pipe.ts", result, "utf8");
