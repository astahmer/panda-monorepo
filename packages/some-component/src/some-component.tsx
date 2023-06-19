import { SystemStyleObject } from '@my-monorepo/preset/styled-system/types'
import { cx, css } from '@my-monorepo/ui-lib/css'

import { PropsWithChildren } from 'react'

export const SomeComponent = ({
  children,
  className,
}: PropsWithChildren<Partial<Pick<HTMLDivElement, 'className'>>>) => {
  return (
    <div
      className={cx(
        className,
        css({ backgroundColor: 'teal.300', padding: '4', border: '1px solid token(colors.red.800)' }),
      )}
    >
      <p className={css({ color: 'purple.500', fontSize: 'xs' })}>
        Using the `panda ship` command, we can generate a file that contains the extraction result (from your library
        component internal styles) so that you can include it as just another source of files to extract styles from.
        <br />
        <span className="some-text">
          You can try removing the `'./node_modules/@my-monorepo/some-component/dist/panda.json',` line from the
          `app/web/panda.config.ts` and see that the styles from this component will be missing.
        </span>
      </p>
      {children}
    </div>
  )
}
