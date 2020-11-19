import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export type Crust = {
  name: string
  price: string
  image: string
}

type Props = {
    crusts: Array<Crust>
    onSelect(size: Crust): void
    changeStep(step: number): void
}

export default function SelectCrust({ 
  crusts,
  onSelect,
  changeStep
}: Props) {
  const classes = useStyles()

  const _selectCrust = (crust: Crust) => {
    onSelect(crust)
    changeStep(3)
  }

  return (
    <>
      <h4>Select your favorite Crust</h4>
      <div className={classes.root}>
        {
          crusts.map((crust: Crust) => (
            <div className={classes.crust}>
              <h3>{crust.name}</h3>
              <p>${crust.price}</p>
              <Button size="small" onClick={() => _selectCrust(crust)}>Select</Button>
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
  crust: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10
  }
})