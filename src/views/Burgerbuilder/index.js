import React, { useState, createContext } from 'react'
import Burger from '../../components/Burger/Burger'
import CreateOrder from '../../components/createOrder/createOrder'
import './index.css'

export const BurgerbuilderContext = createContext()

const Burgerbuilder = () => {
  const [cheeses, setCheeses] = useState([])
  const [bacons, setBacons] = useState([])
  const [meats, setMeats] = useState([])
  const [lettuces, setLettuces] = useState([])
  return (
    <BurgerbuilderContext.Provider
      value={{
        cheeses,
        bacons,
        meats,
        lettuces,
        setCheeses,
        setBacons,
        setMeats,
        setLettuces
      }}
    >
      <div className="container-fluid text-center mt-80">
        <div className="rel">
          <Burger />
        </div>
        <div className="text-center">
          <CreateOrder />
        </div>
      </div>
    </BurgerbuilderContext.Provider>
  )
}

export default Burgerbuilder
