import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

import GlobalStyle from './styles/global'
import Routes from './routes'

function App() {
  return (
    <>
      <StylesProvider injectFirst>
        <Routes />
        <GlobalStyle />
      </StylesProvider>
    </>
  )
}

export default App
