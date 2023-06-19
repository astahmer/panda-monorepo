import { defineConfig } from '@pandacss/dev'
import { shadcnButton } from './src/button.recipe'
import { semanticTokens } from './theme/semantic-tokens'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './demo/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: { shadcnButton },
      semanticTokens,
    },
  },

  // The output directory for your css system
  outdir: '@my-monorepo/ui-lib',
  emitPackage: true,
  jsxFramework: 'react',
})
