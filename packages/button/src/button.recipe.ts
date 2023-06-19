import { createAnatomy } from '@ark-ui/react'

import { defineParts, defineRecipe } from '@pandacss/dev'

const buttonAnatomy = createAnatomy('shadcnButton', ['root'])
const parts = defineParts(buttonAnatomy.build())

export const shadcnButton = defineRecipe({
  name: 'shadcnButton',
  jsx: ['ShadcnButton'],
  base: parts({
    root: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'md',
      fontSize: 'sm',
      fontWeight: 'medium',
      transitionProperty: 'colors',
      ringColor: 'shadcn.background',
      _focusVisible: { outline: 'none', ring: 2, ringOffset: 2 },
      _disabled: { opacity: 0.5, pointerEvents: 'none' },
    },
  }),
  variants: {
    variant: {
      default: {
        bg: 'shadcn.primary',
        color: 'shadcn.primaryForeground',
        _hover: {
          bg: {
            base: 'hsl(222.2 47.4% 11.2% / 0.9)',
            _dark: 'hsl(210 40% 98% / 0.9)',
          },
        },
      },
      destructive: {
        bg: 'shadcn.destructive',
        color: 'shadcn.destructiveForeground',
        _hover: { bg: 'shadcn.destructiveHover' },
      },
      outline: {
        border: '1px solid token(colors.shadcn.input)',
        _hover: { bg: 'shadcn.accentForeground', color: 'shadcn.accent' },
      },
      secondary: {
        bg: 'shadcn.secondary',
        color: 'shadcn.secondaryForeground',
        _hover: { bg: 'shadcn.secondary' },
      },
      ghost: {
        _hover: { bg: 'shadcn.accent', color: 'shadcn.accentForeground' },
      },
      link: {
        color: 'shadcn.primary',
        textUnderlineOffset: '4px',
        _hover: { textDecoration: 'underline' },
      },
    },
    size: {
      default: { h: 10, py: 2, px: 4 },
      sm: { h: 9, px: 3, borderRadius: 'md' },
      lg: { h: 11, px: 8, borderRadius: 'md' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})
