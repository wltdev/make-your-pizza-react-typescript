import React from 'react'

export const initialState = {
  size: '',
  crust: '',
  toppings: [],
  price: ''
}

export const AppContext = React.createContext(initialState)