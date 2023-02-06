const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("rollup-plugin-typescript2");
const terser = require("@rollup/plugin-terser");
const pkg = require("./package.json");

module.exports = [
    {
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
    },
    {
        input: "src/sync.ts",
        output: [
            {
                format: "esm",
                file: pkg.moduleSync,
                sourcemap: false,
            },
            {
                format: "cjs",
                file: pkg.mainSync,
                sourcemap: false,
                esModule: false,
            },
        ],
    },
].map((config) => ({
    ...config,
    plugins: [
        resolve(),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
    ],
}));
