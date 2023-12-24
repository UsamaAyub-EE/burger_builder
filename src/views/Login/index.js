import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [Btn, setBtn] = useState('Signin')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Btn === 'Signin') {
      if (!localStorage.getItem(Email)) {
        localStorage.setItem(Email, Password)
        alert('Registration Success')
        localStorage.setItem('auth', Email)
        navigate('/')
      } else if (localStorage.getItem(Email)) {
        alert('Email already exists')
      }
    } else {
      if (localStorage.getItem(Email)) {
        if (localStorage.getItem(Email) === Password) {
          alert('Login Successful')
          console.log(localStorage.getItem(Email))
          localStorage.setItem('auth', Email)
          navigate('/')
        } else {
          alert('Wrong Password')
          navigate('/login')
        }
      }
    }
  }
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="Input">
          <label className="Label"></label>
          <input
            type="email"
            className="Input_type"
            placeholder="E-mail Address"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="Input">
          <label className="Label"></label>
          <input
            type="password"
            className="Input_type"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          className="Button__Button__ajevi Button__Success__1DMln"
        >
          SUBMIT
        </button>
      </form>
      <button
        className="Button__Button__ajevi Danger"
        onClick={() => {
          Btn === 'Signin' ? setBtn('Register') : setBtn('Signin')
        }}
      >
        {Btn}
      </button>
    </div>
  )
}

export default Login
