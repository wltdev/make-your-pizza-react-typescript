import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

import { Size } from './SelectSize'
import { Crust } from './SelectCrust'
import { Grid, Paper } from '@material-ui/core'

type Props = {
  size?: Size
  crust?: Crust
  toppings: Array<any>
  additionalToppings: number
  maxFreeToppings: number
}

export default function Checkout({ 
  size,
  crust,
  toppings,
  additionalToppings,
  maxFreeToppings
}: Props) {
  const classes = useStyles()
  let total = 0
  if (crust && size)
    total = parseFloat(crust.price) + parseFloat(size.price) + additionalToppings

  return (
    <div className={classes.root}>
      <h3>Check your Pizza</h3>
      <Paper className={classes.paper}>
          <div className={classes.item}>
            Size: <span className={classes.price}>${ size?.price }</span>
            <p>{ size?.name }</p>
          </div>

          <div className={classes.item}>
            Crust: <span className={classes.price}>${ crust?.price }</span>
            <p>{ crust?.name }</p>
          </div>

          <div className={classes.item}>
            Extra Toppings: <span className={classes.price}>${ additionalToppings }</span>          
            <Grid container spacing={1} className={classes.toppings}>
              {
                toppings.map((topping: string, index: number) => (                  
                  <Grid item xs>
                    <Chip 
                      label={topping} 
                      color={index > maxFreeToppings ? "primary" : "default" } 
                    />
                  </Grid>
                ))
              }
            </Grid>
          </div>

          <div className={classes.total}>
            Total Price: <span className={classes.totalPrice}>${ total }</span>
          </div>
      </Paper>
    </div>
  )
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'      
    },
    paper: {
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
      paddingBottom: theme.spacing(2),
      '@media (min-width: 780px)': {
        width: 500
      }
    },
    item: {
      fontSize: 18,
      marginBottom: 20,
      marginTop: 20,
    },
    price: {
      color: 'rgb(5 124 55)',
      fontWeight: 'bold',
    },
    toppings: {
      marginTop: 10      
    },
    topping: {
      margin: 5
    },
    total: {
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 40
    },
    totalPrice: {
      color: '#0b814d'
    }
  }),
)