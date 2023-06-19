import { useState } from 'react'
import { css, cx } from '@my-monorepo/ui-lib/css'
import { styled } from '@my-monorepo/ui-lib/jsx'
import { ShadcnButton } from '@my-monorepo/button'

import './App.css'
import './panda.css'
import { SomeComponent } from '@my-monorepo/some-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Panda CSS monorepo example</h1>
      <div className={cx('light', css({ p: 2 }))}>
        <ShadcnButton>[light] Using UI-lib button</ShadcnButton>
      </div>
      <div className={cx('dark', css({ p: 2 }))}>
        <ShadcnButton>[dark] Using UI-lib button</ShadcnButton>
      </div>
      <SomeComponent className={css({ lineHeight: '1.2', '& .some-text': { color: 'black' } })}>
        <styled.span className={css({ color: 'red' })}>
          A component using internal `css` function calls, that needs to ship its own extract result
        </styled.span>
      </SomeComponent>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'my-monorepo.nice-yellow' })}>Hello 🐼!</div>
      <div className="card">
        <button className="vite-button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
