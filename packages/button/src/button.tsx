import { cx } from '@my-monorepo/ui-lib/css'
import { ShadcnButtonVariantProps, shadcnButton } from '@my-monorepo/ui-lib/recipes'
import { type HTMLStyledProps, styled } from '@my-monorepo/ui-lib/jsx'
import { forwardRef } from 'react'

interface ShadcnButtonProps extends HTMLStyledProps<'button'>, ShadcnButtonVariantProps {}

export const ShadcnButton = forwardRef<HTMLButtonElement, ShadcnButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <styled.button
        data-scope="shadcn-button"
        data-part="root"
        className={cx(className, shadcnButton({ variant, size }))}
        ref={ref}
        {...props}
      />
    )
  },
)
ShadcnButton.displayName = 'ShadcnButton'
