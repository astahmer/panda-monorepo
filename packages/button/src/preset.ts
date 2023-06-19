import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { shadcnButton } from './button.recipe'

export const buttonPreset = definePreset({
  theme: {
    extend: {
      recipes: { shadcnButton },
    },
  },
}) as Preset
