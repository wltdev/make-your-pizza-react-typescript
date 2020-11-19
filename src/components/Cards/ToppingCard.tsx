import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { useToasts } from 'react-toast-notifications'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'

type Prop = {
   name: string
   image: string
   ableToSelect: boolean
   onSelect(name: string, add: boolean): void
}
  
export default function ToppingCard({ 
    name,
    image,
    ableToSelect,
    onSelect
}: Prop) {
  const { addToast } = useToasts()
  const classes = useStyles()
  const [checked, setChecked] = useState(false)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (ableToSelect || !event.target.checked) {
      setChecked(event.target.checked)
      onSelect(name, event.target.checked)
    } else {
      addToast(`Toppings limit exceeded`, { 
        appearance: 'error', 
        autoDismiss: true 
      })
    }
  }
  
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={name}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Checkbox
          className={classes.checkbox}
          color="default"
          checked={checked}
          onChange={(event) => handleChange(event)}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 18,
      fontWeight: 'bold'
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
      justifyContent: 'center',
      padding: 0
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'center',
      padding: 0
    },
    checkbox: {
      transform: 'scale(1.5)',
		  margin: 15
    }
  })
)
