import React from 'react'
import './Meat.css'

const Meat = (props) => {
  return props.meats.map((index) => {
    return <div key={index} className="Meat"></div>
  })
}

export default Meat
