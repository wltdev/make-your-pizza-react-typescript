import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import api from '../../utils/api'
import ToppingCard from '../../components/Cards/Topping'

export default function SelectToppings() {
  const classes = useStyles()
  const [toppings, setToppings] = useState([])
  const [selectedToppings, setSelectedToppings] = useState<string[]>([])
  const [pizzaConfig, setPizzaConfig] = useState<any>({})

  const handleSelect = (value: string, add: boolean) => {
    if (add) {
      setSelectedToppings([ ...selectedToppings, value ])
    } else {
      setSelectedToppings(selectedToppings.filter(item => item !== value))
    }
  }

  const showAll = () => {
    console.log(selectedToppings)
    console.log(pizzaConfig)
  }

  useEffect(() => {
    const getToppings = async () => {
      const { data } = await api.get('/pizza/toppings')
      if(data.length) {
        setToppings(data)
      }
    }

    const getPizzaConfig = async () => {
      const { data } = await api.get('/pizza/config')
      setPizzaConfig(data)
    }

    getToppings()
    getPizzaConfig()
  }, [])

  useEffect(() => {
    if (selectedToppings.length > 3) {
      console.log('is bigger then 3')
    }
  }, [selectedToppings])

  return (
    <>
      <div className={classes.toppings}>
        { toppings.map((doc: any, index) => {
          return (
            <ToppingCard 
              key={index}
              image={doc.image} 
              name={doc.name} 
              onSelect={handleSelect} 
            />
          )
        }) }
      </div>
      <Button onClick={showAll} size="small">All</Button>
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
