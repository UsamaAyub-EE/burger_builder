import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Burgerbuilder from './views/Burgerbuilder'
import Login from './views/Login'
import Orders from './views/Orders'
import { Navbar } from './components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Checkout from './views/Checkout/Checkout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Burgerbuilder />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<Orders />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
