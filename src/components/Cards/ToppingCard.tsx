import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { useToasts } from 'react-toast-notifications'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles({
  root: {
   display: 'flex',
   flexDirection: 'row',   
   justifyContent: 'space-around',
   margin: 10
  },  
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 140,
    objectFit: 'cover'
  }
})

type Prop = {
   name: string
   key: number
   image: string
   ableToSelect: boolean
   onSelect(name: string, add: boolean): void
}
  
export default function ToppingCard({ 
    name,
    key,
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
    <div className={classes.root} key={key}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={image}
                title={name}
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Checkbox
                    checked={checked}
                    onChange={(event) => handleChange(event)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </CardActions>
        </Card>
    </div>  
  )
}