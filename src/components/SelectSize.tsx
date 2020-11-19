import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export type Size = {
  name: string
  price: string
  maxToppings: number
}

type Props = {
  sizes: Array<any>
  onSelect(size: Size): void
  changeStep(step: number): void
}

export default function SelectSize({ 
  sizes,
  onSelect,
  changeStep
}: Props) {
  const classes = useStyles()

  const _selectSize = (size: Size) => {
    onSelect(size)
    changeStep(2)
  }  

  return (
    <>
      <h4>Select size</h4>
      <div className={classes.root}>
        {
          sizes.map((size: Size) => (
            <div className={classes.size}>
              <h3>{size.name}</h3>
              <p>${size.price}</p>
              <Button size="small" onClick={() => _selectSize(size)}>Select</Button>
            </div>
          ))
        }
      </div>
    </>
  )
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',   
    justifyContent: 'space-around',
    margin: 10,
    '@media (max-width: 780px)' : {
      flexDirection: 'column'
    }
  },
  size: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10
  }
})