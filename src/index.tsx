import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Loading from './components/Loading'
import { GlobalStyle } from './globals'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
)