import { defineConfig } from '@pandacss/dev'
import presetPanda from '@pandacss/preset-panda'
import { myMonorepoPreset } from '@my-monorepo/preset'
import { buttonPreset } from '@my-monorepo/button/preset'

export default defineConfig({
  presets: [presetPanda, myMonorepoPreset, buttonPreset],
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './node_modules/@my-monorepo/button/dist/panda.json',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: '@my-monorepo/ui-lib',
  emitPackage: true,
  jsxFramework: 'react',
})
