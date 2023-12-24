import React from 'react'
import './Cheese.css'

const Cheese = (props) => {
  return props.cheeses.map((index) => {
    return <div key={index} className="Cheese"></div>
  })
}

export default Cheese
