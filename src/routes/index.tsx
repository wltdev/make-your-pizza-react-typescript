import React from 'react'
import { Router } from '@reach/router'

import Route from './Route'
import Home from '../views/Home'

export default function Routes() {
  return (
    <Router>
      <Route component={Home} path="/" title="Make your own pizza" />
    </Router>
  )
}