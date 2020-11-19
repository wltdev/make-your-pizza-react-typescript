import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'

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
    <div className={classes.root}>
      <h3>Choose Size</h3>
      <Grid container spacing={3}>
        {
          sizes.map((size: Size) => (
            <Grid key={size.name} item xs>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography  variant="h6" className={classes.title} color="textSecondary" gutterBottom>
                    {size.name}
                  </Typography>
                  <Typography  variant="h6" className={classes.price} color="textSecondary" gutterBottom>
                    ${size.price}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button 
                    size="medium" 
                    variant="contained" 
                    color="primary"
                    onClick={() => _selectSize(size)}
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