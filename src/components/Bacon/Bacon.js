import React from 'react'
import './Bacon.css'

const Bacon = (props) => {
  return props.bacons.map((index) => {
    return <div key={index} className="Bacon"></div>
  })
}

export default Bacon
