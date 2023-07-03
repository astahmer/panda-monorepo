import { RecipeVariantProps, cva, cx } from '../styled-system/css'
import { HTMLStyledProps, styled } from '../styled-system/jsx'

// I just took the original storybook sample & pasted it here, then adapted it to CVA :)
// https://transform.tools/css-to-js

const button = cva({
  base: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 700,
    border: '0',
    borderRadius: '3em',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
  },
  variants: {
    variant: {
      primary: {
        color: 'white',
        backgroundColor: '#1ea7fd',
      },
      secondary: {
        color: '#333',
        backgroundColor: 'transparent',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
      },
    },
    size: {
      small: { fontSize: '12px', padding: '10px 16px' },
      medium: { fontSize: '14px', padding: '11px 20px' },
      large: { fontSize: '16px', padding: '12px 24px' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

type ButtonProps = HTMLStyledProps<'button'> & RecipeVariantProps<typeof button>

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant,
  size,
  className,
  label,
  ...props
}: ButtonProps & {
  label: string
}) => {
  return (
    <styled.button {...props} type="button" className={cx(button({ variant, size }), className)}>
      {label}
    </styled.button>
  )
}
