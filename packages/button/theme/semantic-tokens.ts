import { defineSemanticTokens } from '@pandacss/dev'

/** @see https://ui.shadcn.com/docs/theming */
export const semanticTokens = defineSemanticTokens({
  colors: {
    shadcn: {
      background: {
        value: { base: 'hsl(0 0% 100%)', _dark: 'hsl(224 71% 4%)' },
      },
      foreground: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(213 31% 91%)',
        },
      },
      muted: {
        value: { base: 'hsl(210 40% 96.1%)', _dark: 'hsl(223 47% 11%)' },
      },
      mutedForeground: {
        value: {
          base: 'hsl(215.4 16.3% 46.9%)',
          _dark: 'hsl(215.4 16.3% 56.9%)',
        },
      },
      popover: {
        value: { base: 'hsl(0 0% 100%)', _dark: 'hsl(224 71% 4%)' },
      },
      popoverForeground: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(215 20.2% 65.1%)',
        },
      },
      card: {
        value: { base: 'hsl(0 0% 100%)', _dark: 'hsl(224 71% 4%)' },
      },
      cardForeground: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(213 31% 91%)',
        },
      },
      border: {
        value: {
          base: 'hsl(214.3 31.8% 91.4%)',
          _dark: 'hsl(216 34% 17%)',
        },
      },
      input: {
        value: {
          base: 'hsl(214.3 31.8% 91.4%)',
          _dark: 'hsl(216 34% 17%)',
        },
      },
      primary: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(210 40% 98%)',
        },
      },
      primaryForeground: {
        value: {
          base: 'hsl(210 40% 98%)',
          _dark: 'hsl(222.2 47.4% 1.2%)',
        },
      },
      secondary: {
        value: {
          base: 'hsl(210 40% 96.1%)',
          _dark: 'hsl(222.2 47.4% 11.2%)',
        },
      },
      secondaryForeground: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(210 40% 98%)',
        },
      },
      accent: {
        value: { base: 'hsl(210 40% 96.1%)', _dark: 'hsl(216 34% 17%)' },
      },
      accentForeground: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(210 40% 98%)',
        },
      },
      destructive: {
        value: { base: 'hsl(0 100% 50%)', _dark: 'hsl(0 63% 31%)' },
      },
      destructiveForeground: {
        value: { base: 'hsl(210 40% 98%)', _dark: 'hsl(210 40% 98%)' },
      },
      ring: {
        value: {
          base: 'hsl(215 20.2% 65.1%)',
          _dark: 'hsl(216 34% 17%)',
        },
      },
      radius: { value: { base: '0.5rem', _dark: '0.5rem' } },
    },
  },
})
