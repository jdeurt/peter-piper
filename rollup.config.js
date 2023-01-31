import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json" assert { type: "json" };

export default {
    input: "src/index.ts",
    output: [
        {
            format: "esm",
            file: pkg.module,
            sourcemap: false,
        },
        {
            format: "cjs",
            file: pkg.main,
            sourcemap: false,
            esModule: false,
        },
        {
            name: pkg.name,
            format: "umd",
            file: pkg.unpkg,
            sourcemap: false,
            esModule: false,
            plugins: [terser()],
        },
    ],
    external: [
        ...(await import("module")).builtinModules,
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
        resolve(),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
    ],
};
