import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { ToastProvider } from 'react-toast-notifications'

import api from '../../utils/api'
import Toppings from '../../components/Toppins'
import SelectSize, { Size } from '../../components/SelectSize'
import SelectCrust, { Crust } from '../../components/SelectCrust'
import Checkout from '../../components/Checkout'

export default function Home() {
  const classes = useStyles()
  const [step, setStep] = useState(1)
  const [configSizes, setConfigsSizes] = useState<any>([])
  const [configCrusts, setConfigsCrusts] = useState<any>([])
  const [maxFreeToppings, setMaxFreeToppings] = useState(3)
  const [toppings, setToppings] = useState([])
  const [size, setSize] = useState<Size>()
  const [crust, setCrust] = useState<Crust>()
  const [selectedToppings, setSelectedToppings] = useState<string[]>([])
  const [additionalToppings, setAdditionalToppings] = useState(0)
  
  useEffect(() => {
    const getPizzaConfig = async () => {
      const { data } = await api.get('/pizza/config')
      setConfigsSizes(data.pizza.size)
      setConfigsCrusts(data.pizza.crust)
      setMaxFreeToppings(data.pizza.maxFreeToppings)
    }
    const getToppings = async () => {
      const { data } = await api.get('/pizza/toppings')
      setToppings(data)
    }

    getPizzaConfig()
    getToppings()
  }, [])

  // Verifying additional toppings
  useEffect(() => {
    if (selectedToppings.length > maxFreeToppings) {
      let val = selectedToppings.length - 3
      val *= 0.5
      setAdditionalToppings(val)
    } else {
      setAdditionalToppings(0)
    }
  }, [selectedToppings])

  const toppingsHandler = (value: string, add: boolean) => {
    if (add) {
      setSelectedToppings([ ...selectedToppings, value ])
    } else {
      setSelectedToppings(selectedToppings.filter(item => item !== value))
    }
  }

  return (
    <ToastProvider placement="bottom-right">
      { step === 1 && 
        <SelectSize sizes={configSizes} onSelect={setSize} changeStep={setStep} /> 
      }

      { step === 2 && 
        <SelectCrust crusts={configCrusts} onSelect={setCrust} changeStep={setStep} /> 
      }

      { step === 3 && 
        <Toppings 
          toppings={toppings} 
          toppingsHandler={toppingsHandler} 
          totalSelected={selectedToppings.length}
          maxToppings={size?.maxToppings || 5}
          changeStep={setStep} 
        /> 
      }

      { step === 4 &&
        <Checkout
          size={size}
          crust={crust}
          toppings={selectedToppings}
          maxFreeToppings={maxFreeToppings - 1}
          additionalToppings={additionalToppings}
        />
      }
    </ToastProvider>
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
