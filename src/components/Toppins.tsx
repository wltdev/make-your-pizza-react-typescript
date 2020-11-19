import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

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
    <div className={classes.root}>
      <h3>Choose Toppings</h3>
      <Grid container spacing={3}>
        { toppings.map((doc: any, index: any) => {
          return (
            <Grid item key={doc.name} xs={12} sm={6} md={4}>
              <ToppingCard
                image={doc.image} 
                name={doc.name} 
                onSelect={toppingsHandler}
                ableToSelect={ableToSelect} 
              />
            </Grid>
          )
        }) }
      </Grid>
      <div className={classes.button}>
        <Button 
          size="large"
          variant="contained" 
          color="primary"
          endIcon={<NavigateNextIcon />}
          onClick={() => changeStep(4)}
        >
          Checkout
        </Button>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center'
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 30
    }
  }),
);
  