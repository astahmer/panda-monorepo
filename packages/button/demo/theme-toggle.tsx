'use client'

import { css } from '@my-monorepo/ui-lib/css'
import { ShadcnButton } from '../src/button'
import { Icons } from './icons'

export function ThemeToggle() {
  return (
    <ShadcnButton
      variant="secondary"
      className={css({ alignSelf: 'center', w: 9, h: 9 })}
      onClick={() => document.documentElement.classList.toggle('dark')}
    >
      <Icons.sun
        className={css({
          position: 'absolute',
          transform: 'rotate(0deg) scale(1)',
          transition: 'transform 0.2s ease-in-out',
          _dark: {
            transform: 'rotate(-90deg) scale(0)',
          },
        })}
      />
      <Icons.moon
        className={css({
          position: 'absolute',
          transform: 'rotate(90deg) scale(0)',
          transition: 'transform 0.2s ease-in-out',
          _dark: {
            transform: 'rotate(0deg) scale(1)',
          },
        })}
      />
      <span className={css({ srOnly: true })}>Toggle theme</span>
    </ShadcnButton>
  )
}
