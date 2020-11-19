import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Size } from './SelectSize'
import { Crust } from './SelectCrust'

type Props = {
  size?: Size
  crust?: Crust
  toppings: Array<any>
  additionalToppings: number
}

export default function Checkout({ 
  size,
  crust,
  toppings,
  additionalToppings
}: Props) {
  const classes = useStyles()
  let total = 0
  if (crust && size)
    total = parseFloat(crust.price) + parseFloat(size.price) + additionalToppings

  return (
    <>
      <h4>Check your Pizza</h4>
      <div className={classes.root}>
        <p>Size: { size?.name }</p>
        <p>Crust: { crust?.name }</p>
        <p>Toppings:</p>
        {
          toppings.map((topping: string) => (
            <span>{ topping }</span>
          ))
        }
        <p>Total price: { total }</p>
      </div>
    </>
  )
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    '@media (max-width: 780px)' : {
      flexDirection: 'column'
    }
  }
})