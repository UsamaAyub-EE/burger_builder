import React from 'react'
import './Lettuce.css'

const Lettuce = (props) => {
  return props.lettuces.map((index) => {
    return <div key={index} className="Lettuce"></div>
  })
}

export default Lettuce
