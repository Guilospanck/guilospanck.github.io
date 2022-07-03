import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import Loading from './components/Loading'

import { AppRoute } from './Route'

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <AppRoute />
      </Suspense>
    </RecoilRoot>
  )
}

export default App