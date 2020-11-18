import React from 'react'
import { Router } from '@reach/router'

import Route from './Route'
import SelectToppings from '../views/SelectToppings'

export default function Routes() {
  return (
    <Router>
      <Route component={SelectToppings} path="/" title="Select Toppings" />
    </Router>
  )
}