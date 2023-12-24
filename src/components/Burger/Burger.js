import React, { useContext } from 'react'
import './Burger.css'
import Bottombun from '../Bottombun/Bottombun'
import Topbun from '../Topbun/Topbun'
import Cheese from '../Cheese/Cheese'
import Bacon from '../Bacon/Bacon'
import Lettuce from '../Lettuce/Lettuce'
import Meat from '../Meat/Meat'
import { BurgerbuilderContext } from '../../views/Burgerbuilder/index'

const Burger = () => {
  const { cheeses, bacons, meats, lettuces } = useContext(BurgerbuilderContext)
  return (
    <div className="Burger">
      <Topbun />
      <Cheese cheeses={cheeses} />
      <Bacon bacons={bacons} />
      <Meat meats={meats} />
      <Lettuce lettuces={lettuces} />
      <Bottombun />
    </div>
  )
}

export default Burger
