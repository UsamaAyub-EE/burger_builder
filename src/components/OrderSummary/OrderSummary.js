import React, { useContext } from 'react'
import './OrderSummary.css'
import { BurgerbuilderContext } from '../../views/Burgerbuilder/index'
import { useNavigate } from 'react-router-dom'
import propTypes from 'prop-types'

const OrderSummary = (props) => {
  const navigate = useNavigate()
  const { cheeses, bacons, meats, lettuces } = useContext(BurgerbuilderContext)
  const Cancel = () => {
    props.setShowOrderSummary(false)
    navigate('/')
  }
  const Continue = () => {
    navigate('/checkout', {
      state: {
        cheeses,
        bacons,
        meats,
        lettuces
      }
    })
  }
  return (
    <>
      <div className="Modal">
        <h3>Your Order Summary:</h3>
        <p>Lettuce: {lettuces.length}</p>
        <p>Cheese: {cheeses.length}</p>
        <p>Bacon: {bacons.length}</p>
        <p>Meat: {meats.length}</p>

        <p>
          <strong>
            Total Price: $
            {(
              3 +
              cheeses.length * 0.4 +
              bacons.length * 0.7 +
              meats.length * 1.3 +
              lettuces.length * 0.5
            ).toFixed(2)}
          </strong>
        </p>
        <p>Continue to Checkout?</p>
        <button className="Button Danger" onClick={Cancel}>
          CANCEL
        </button>
        <button className="Button Success" onClick={Continue}>
          CONTINUE
        </button>
      </div>
      <div className="Backdrop"></div>
    </>
  )
}
OrderSummary.propTypes = {
  setShowOrderSummary: propTypes.func.isRequired
}

export default OrderSummary
