const typescript = require("rollup-plugin-typescript2");
const terser = require("@rollup/plugin-terser");
const pkg = require("./package.json");
const generatePackageJson = require("rollup-plugin-generate-package-json");

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
                file: "dist/sync.mjs",
                sourcemap: false,
            },
            {
                format: "cjs",
                file: "dist/sync.js",
                sourcemap: false,
                esModule: false,
            },
        ],
    },
    {
        input: "src/utils.ts",
        output: [
            {
                format: "esm",
                file: "dist/utils.mjs",
                sourcemap: false,
            },
            {
                format: "cjs",
                file: "dist/utils.js",
                sourcemap: false,
                esModule: false,
            },
        ],
    },
].map((config) => ({
    ...config,
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true,
        }),
    ],
}));
