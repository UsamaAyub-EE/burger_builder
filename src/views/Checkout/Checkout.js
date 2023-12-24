import React, { useState } from 'react'
import './Checkout.css'
import Topbun from '../../components/Topbun/Topbun'
import Cheese from '../../components/Cheese/Cheese'
import Bacon from '../../components/Bacon/Bacon'
import Meat from '../../components/Meat/Meat'
import Lettuce from '../../components/Lettuce/Lettuce'
import Bottombun from '../../components/Bottombun/Bottombun'
import ContactData from '../../components/Contact_data/contact_data'
import { useLocation, useNavigate } from 'react-router-dom'

const Checkout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [showContactForm, setShowContactForm] = useState(false)
  const Cancel = () => {
    navigate('/')
    setShowContactForm(false)
  }
  return (
    <>
      <div className="Layout">
        <div className="CheckoutSummary">
          <div className="text-center">
            <h1>We hope it tastes well!</h1>
          </div>
          <div className="Burger">
            <Topbun />
            <Cheese cheeses={location.state.cheeses} />
            <Bacon bacons={location.state.bacons} />
            <Meat meats={location.state.meats} />
            <Lettuce lettuces={location.state.lettuces} />
            <Bottombun />
          </div>
          <button onClick={Cancel} className="Button Danger">
            Cancel
          </button>
          <button
            onClick={() => setShowContactForm(true)}
            className="Button Success"
          >
            Continue
          </button>
          {showContactForm && (
            <ContactData
              cheeses={location.state.cheeses}
              bacons={location.state.bacons}
              meats={location.state.meats}
              lettuces={location.state.lettuces}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Checkout
