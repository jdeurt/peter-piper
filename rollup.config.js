const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("rollup-plugin-typescript2");
const terser = require("@rollup/plugin-terser");
const pkg = require("./package.json");

module.exports = {
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
        ...require("node:module").builtinModules,
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
