import { useState } from 'react'
import { css } from '@my-monorepo/ui-lib/css'
import { ShadcnButton } from '@my-monorepo/button'

import './App.css'
import './panda.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Panda CSS monorepo example</h1>
      <div className="light">
        <ShadcnButton>[light] Using UI-lib button</ShadcnButton>
      </div>
      <div className="dark">
        <ShadcnButton>[dark] Using UI-lib button</ShadcnButton>
      </div>
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
