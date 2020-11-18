import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

import './App.css'
import Routes from './routes'

function App() {
  return (
    <>
      <StylesProvider injectFirst>
        <Routes />
      </StylesProvider>
    </>
  )
}

export default App;
