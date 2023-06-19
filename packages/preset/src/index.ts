import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { semanticTokens } from './semantic-tokens'

export const myMonorepoPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          'nice-yellow': { value: '#facc15' },
        },
      },
      semanticTokens: {
        colors: {
          ...semanticTokens.colors,
          'my-monorepo': {
            'nice-yellow': { value: '{colors.nice-yellow}' },
          },
        },
      },
    },
  },
}) as Preset
