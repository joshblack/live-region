import esbuild from 'rollup-plugin-esbuild';
import { preserveDirectives } from 'rollup-plugin-preserve-directives';
import typescript from 'rollup-plugin-typescript2';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: ['./src/index.tsx'],
  external: [
    'live-region-element',
    'live-region-element/define',
    'react',
    'react-dom',
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
    esbuild({
      tsconfig: 'tsconfig.build.json',
    }),
    preserveDirectives(),
  ],
  output: {
    dir: './dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
};

export default config;
