import React from 'react'
import './index.css'

const Orders = () => {
  const auth = localStorage.getItem('auth')
  const orders = JSON.parse(localStorage.getItem(auth + 'order'))
  return (
    <div className="Layout">
      <div className="Orders">
        {orders.map((order) => {
          return (
            <div key={order.id} className="Order">
              <p>
                Ingredients:
                <span>bacon ({order.nbacon})</span>
                <span>cheese ({order.ncheese})</span>
                <span>meat ({order.nmeat})</span>
                <span>lettuce ({order.nlettuce})</span>
              </p>
              <p>
                Price{' '}
                <strong>
                  USD $
                  {(
                    3 +
                    order.ncheese * 0.4 +
                    order.nbacon * 0.7 +
                    order.nmeat * 1.3 +
                    order.nlettuce * 0.5
                  ).toFixed(2)}
                </strong>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders
