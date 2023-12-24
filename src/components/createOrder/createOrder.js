import React, { useState, useContext } from 'react'
import './createOrder.css'
import { BurgerbuilderContext } from '../../views/Burgerbuilder'
import { RemoveItem, AddItem } from '../../helpers/ArrayItem'
import { useNavigate } from 'react-router-dom'
import OrderSummary from '../OrderSummary/OrderSummary'

function createOrder() {
  const {
    cheeses,
    bacons,
    meats,
    lettuces,
    setCheeses,
    setBacons,
    setMeats,
    setLettuces
  } = useContext(BurgerbuilderContext)
  const navigate = useNavigate()
  const [showOrderSummary, setShowOrderSummary] = useState(false)
  const auth = localStorage.getItem('auth')
  const Order = () => {
    setShowOrderSummary(true)
  }
  return (
    <>
      <div className="BuildControls">
        <p>
          Current price:
          <strong>
            $
            {(
              3 +
              cheeses.length * 0.4 +
              bacons.length * 0.7 +
              meats.length * 1.3 +
              lettuces.length * 0.5
            ).toFixed(2)}
          </strong>
        </p>
        <div className="BuildControl">
          <div className="BuildControl__Label">Lettuce</div>
          <button
            className="Less"
            onClick={() => setLettuces(RemoveItem(lettuces))}
            disabled={lettuces.length === 0}
          >
            Less
          </button>
          <button
            className="More"
            onClick={() => setLettuces(AddItem(lettuces))}
          >
            More
          </button>
        </div>
        <div className="BuildControl">
          <div className="BuildControl__Label">Bacon</div>
          <button
            className="Less"
            onClick={() => setBacons(RemoveItem(bacons))}
            disabled={bacons.length === 0}
          >
            Less
          </button>
          <button className="More" onClick={() => setBacons(AddItem(bacons))}>
            More
          </button>
        </div>
        <div className="BuildControl">
          <div className="BuildControl__Label">Cheese</div>
          <button
            className="Less"
            onClick={() => setCheeses(RemoveItem(cheeses))}
            disabled={cheeses.length === 0}
          >
            Less
          </button>
          <button className="More" onClick={() => setCheeses(AddItem(cheeses))}>
            More
          </button>
        </div>
        <div className="BuildControl">
          <div className="BuildControl__Label">Meat</div>
          <button
            className="Less"
            onClick={() => setMeats(RemoveItem(meats))}
            disabled={meats.length === 0}
          >
            Less
          </button>
          <button className="More" onClick={() => setMeats(AddItem(meats))}>
            More
          </button>
        </div>
        {auth === '0' && (
          <button
            className="OrderButton"
            onClick={() => {
              navigate('/login')
            }}
            disabled={
              meats.length === 0 &&
              bacons.length === 0 &&
              cheeses.length === 0 &&
              lettuces.length === 0
            }
          >
            SIGN UP TO ORDER
          </button>
        )}
        {auth !== '0' && (
          <button
            className="OrderButton"
            onClick={Order}
            disabled={
              meats.length === 0 &&
              bacons.length === 0 &&
              cheeses.length === 0 &&
              lettuces.length === 0
            }
          >
            ORDER NOW
          </button>
        )}
      </div>
      {showOrderSummary && (
        <OrderSummary setShowOrderSummary={setShowOrderSummary} />
      )}
    </>
  )
}

export default createOrder
