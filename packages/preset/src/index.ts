import { definePreset } from '@pandacss/dev'

export default definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          'nice-yellow': { value: '#facc15' },
        },
      },
      semanticTokens: {
        colors: {
          'my-monorepo': {
            'nice-yellow': { value: '{colors.nice-yellow}' },
          },
        },
      },
    },
  },
}) as any
