import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import ToppingCard from './Cards/ToppingCard'

type Props = {
    toppings: Array<any>
    toppingsHandler(name: string, add: boolean): void
    changeStep(step: number): void
}

export default function Toppings({ 
    toppings,
    toppingsHandler,
    changeStep
}: Props) {
  const classes = useStyles()
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
            />
          )
        }) }
      </div>

      <Button size="small" onClick={() => changeStep(2)}>step 2</Button>
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
  