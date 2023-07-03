import React from 'react'
import { Header, User } from './Header'
import { css } from '@my-monorepo/ui-lib/css'

export const Page = () => {
  const [user, setUser] = React.useState<undefined | User>()

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section
        className={css({
          fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: '14px',
          lineHeight: '24px',
          padding: '48px 20px',
          margin: '0 auto',
          maxWidth: '600px',
          color: '#333',
          '& h2': {
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: 1,
            margin: '0 0 4px',
            display: 'inline-block',
            verticalAlign: 'top',
          },
          '& p': { margin: '1em 0' },
          '& a': { textDecoration: 'none', color: '#1ea7fd' },
          '& ul': { paddingLeft: '30px', margin: '1em 0' },
          '& li': { marginBottom: '8px' },
        })}
      >
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without needing to navigate to
          them in your app. Here are some handy patterns for managing page data in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the "args" of child
            component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            docs
          </a>
          .
        </p>
        <div
          className={css({
            fontSize: '13px',
            lineHeight: '20px',
            marginTop: '40px',
            marginBottom: '40px',
          })}
        >
          <span
            className={css({
              display: 'inline-block',
              borderRadius: '1em',
              fontSize: '11px',
              lineHeight: '12px',
              fontWeight: 700,
              background: '#e7fdd8',
              color: '#66bf3c',
              padding: '4px 12px',
              marginRight: '10px',
              verticalAlign: 'top',
            })}
          >
            Tip
          </span>{' '}
          Adjust the width of the canvas with the{' '}
          <svg
            className={css({
              display: 'inline-block',
              height: '12px',
              width: '12px',
              marginRight: '4px',
              verticalAlign: 'top',
              marginTop: '3px',
              '& path': { fill: '#1ea7fd' },
            })}
            width="10"
            height="10"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  )
}
