import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import ToppingCard from './Cards/ToppingCard'

type Props = {
    toppings: Array<any>
    maxToppings: number
    totalSelected: number
    toppingsHandler(name: string, add: boolean): void
    changeStep(step: number): void
}

export default function Toppings({ 
    toppings,
    maxToppings,
    totalSelected,
    toppingsHandler,
    changeStep
}: Props) {
  const classes = useStyles()
  const ableToSelect = totalSelected < maxToppings

  return (
    <>
      <div className={classes.toppings}>
        { toppings.map((doc: any, index: any) => {
          return (
            <ToppingCard 
              key={index}
              image={doc.image} 
              name={doc.name} 
              onSelect={toppingsHandler}
              ableToSelect={ableToSelect} 
            />
          )
        }) }
      </div>

      <Button size="small" onClick={() => changeStep(4)}>Checkout</Button>
    </>
  )
}

const useStyles = makeStyles({
  toppings: {
    display: 'flex',
    flexDirection: 'row',   
    justifyContent: 'space-between',
    margin: 10,
    '@media (max-width: 780px)' : {
      flexDirection: 'column'
    }
  }
})
  