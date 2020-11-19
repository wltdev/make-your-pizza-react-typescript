import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import api from '../../utils/api'
import Toppings from '../../components/Toppins'

export default function Home() {
  const classes = useStyles()
  const [configs, setConfigs] = useState<any>({})
  const [step, setStep] = useState(1)
  const [toppings, setToppings] = useState([])
  const [selectedToppings, setSelectedToppings] = useState<string[]>([])

  const toppingsHandler = (value: string, add: boolean) => {
    if (add) {
      setSelectedToppings([ ...selectedToppings, value ])
    } else {
      setSelectedToppings(selectedToppings.filter(item => item !== value))
    }
  }

  const showAll = () => {
    console.log(selectedToppings)
  }
  
  useEffect(() => {
    const getPizzaConfig = async () => {
      const { data } = await api.get('/pizza/config')
      setConfigs(data)
    }
    const getToppings = async () => {
      const { data } = await api.get('/pizza/toppings')
      setToppings(data)
    }

    getPizzaConfig()
    getToppings()
  }, [])

  useEffect(() => {
    if (selectedToppings.length > 3) {
      console.log('is bigger then 3')
    }
  }, [selectedToppings])

  function Steps() {
    if (step === 2) {
      return <h1>Este 2</h1>
    }
    
    return 
  } 

  return (
    <>
      { step === 1 && <Toppings toppings={toppings} toppingsHandler={toppingsHandler} changeStep={setStep} /> }
      { step === 2 && <h1>Step 2</h1> }      
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
