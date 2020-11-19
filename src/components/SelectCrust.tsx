import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'

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
    <div className={classes.root}>
      <h3>Choose your favorite Crust</h3>
      <Grid container spacing={3}>
        {
          crusts.map((crust: Crust) => (
            <Grid key={crust.name} item xs>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography  variant="h6" className={classes.title} color="textSecondary" gutterBottom>
                      {crust.name}
                    </Typography>
                    <Typography  variant="h6" className={classes.price} color="textSecondary" gutterBottom>
                      ${crust.price}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button 
                    size="medium"
                    variant="contained" 
                    color="primary" 
                    onClick={() => _selectCrust(crust)}
                  >
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgb(5 124 55)'
  },
  card: {
    height: '100%',
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
    '@media (max-width: 780px)' : {
      paddingTop: '30%'
    }
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0
  },
})