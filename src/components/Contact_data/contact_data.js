import React, { useState } from 'react'
import './contact_data.css'
import { useNavigate } from 'react-router-dom'

const contactData = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const auth = localStorage.getItem('auth')
    const order = {
      ncheese: props.cheeses.length,
      nbacon: props.bacons.length,
      nmeat: props.meats.length,
      nlettuce: props.lettuces.length
    }
    if (localStorage.getItem(auth + 'order') === null) {
      order.id = 1
      localStorage.setItem(auth + 'order', JSON.stringify([order]))
    } else {
      const orders = JSON.parse(localStorage.getItem(auth + 'order'))
      order.id = orders.length + 2
      orders.push(order)
      localStorage.setItem(auth + 'order', JSON.stringify(orders))
    }
    navigate('/')
    alert('Order Placed Successfully')
  }
  const validEmail = (e) => {
    const validRegex =
      // eslint-disable-next-line no-useless-escape
      // eslint-disable-next-line no-control-regex
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return validRegex.test(e)
  }
  return (
    <div classNameName="ContactData">
      <h4>Enter your Contact Data</h4>
      <form onSubmit={handleSubmit}>
        <div className="Input__Input__1VROp">
          <label className="Input__Label__1tOSX"></label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="Input__InputElement__3TB0k"
            placeholder="Your Name"
            value={name}
          />
        </div>
        <div className="Input__Input__1VROp">
          <label className="Input__Label__1tOSX"></label>
          <input
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            className="Input__InputElement__3TB0k"
            placeholder="Street"
            value={street}
          />
        </div>
        <div className="Input__Input__1VROp">
          <label className="Input__Label__1tOSX"></label>
          <input
            onChange={(e) => setZip(e.target.value)}
            type="text"
            className="Input__InputElement__3TB0k"
            placeholder="Zip Code"
            value={zip}
          />
        </div>
        <div className="Input__Input__1VROp">
          <label className="Input__Label__1tOSX"></label>
          <input
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            className="Input__InputElement__3TB0k"
            placeholder="Country"
            value={country}
          />
        </div>
        <div className="Input__Input__1VROp">
          <label className="Input__Label__1tOSX"></label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="Input__InputElement__3TB0k"
            placeholder="E-mail"
            value={email}
          />
        </div>
        <div className="Input__Input__1VROp">
          <label className="Input__Label__1tOSX"></label>
          <select className="Input__InputElement__3TB0k">
            <option value="fastest">Fastest</option>
            <option value="cheapest">Cheapest</option>
          </select>
        </div>
        <button
          className="Button Success"
          disabled={
            !(validEmail(email) && email && zip && country && name && street)
          }
        >
          ORDER
        </button>
      </form>
    </div>
  )
}

export default contactData
