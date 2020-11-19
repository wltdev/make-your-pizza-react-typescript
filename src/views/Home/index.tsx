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
  const [configs, setConfigs] = useState<any>({})
  const [configSizes, setConfigsSizes] = useState<any>([])
  const [configCrusts, setConfigsCrusts] = useState<any>([])
  const [step, setStep] = useState(1)
  const [toppings, setToppings] = useState([])
  const [size, setSize] = useState<Size>()
  const [crust, setCrust] = useState<Crust>()
  const [selectedToppings, setSelectedToppings] = useState<string[]>([])
  const [additionalToppings, setAdditionalToppings] = useState(0)
  
  useEffect(() => {
    const getPizzaConfig = async () => {
      const { data } = await api.get('/pizza/config')
      setConfigs(data)
      setConfigsSizes(data.pizza.size)
      setConfigsCrusts(data.pizza.crust)
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
    if (selectedToppings.length > 3) {
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

  const showAll = () => {
    console.log(selectedToppings)
    console.log(size)
    console.log(additionalToppings)
    console.log(crust)
  }

  return (
    <ToastProvider>
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
          additionalToppings={additionalToppings}
        />
      }

      <Button onClick={showAll} size="small">All</Button>
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
