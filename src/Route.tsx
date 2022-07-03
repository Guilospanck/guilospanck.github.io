import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))

export const AppRoute = () => {
  // const BASENAME = process.env.NODE_ENV === 'development' ? '/' : '/guilospanck.github.io' // because of github pages
  const BASENAME = '/'

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
