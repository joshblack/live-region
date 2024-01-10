import esbuild from "rollup-plugin-esbuild";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: ["./src/index.ts", "./src/define.ts"],
  external: ["@lit-labs/ssr-dom-shim"],
  plugins: [esbuild()],
  output: {
    dir: "./dist",
    format: "esm",
  },
};

export default config;
