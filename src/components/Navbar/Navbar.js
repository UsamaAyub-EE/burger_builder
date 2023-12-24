import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Logo from '../../assets/burger-logo.b8503d26.png'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  let auth = localStorage.getItem('auth')
  if (!localStorage.getItem('auth')) {
    localStorage.setItem('auth', '0')
    auth = '0'
  }
  const Logout = () => {
    localStorage.setItem('auth', '0')
    navigate('/')
  }
  return (
    <>
      {/* <nav className='navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm'>
        <div className='container'>
          <a href='/' className='navbar-brand'>
            <img src={Logo} width='45' alt='Logo' className='d-inline-block align-middle mr-2'/>
          </a>

          <div id='navbarSupportedContent' className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-50 navbar-right'>
              <li className='nav-item active bg-dark'><a href='/' className='nav-link'>Burger builder</a></li>
              {auth === '0' && <li className='nav-item bg-dark'><a href='login' className='nav-link'>Login</a></li>}
              {auth !== '0' && <li className='nav-item bg-dark'><a onClick={Logout} className='nav-link'>Logout</a></li>}
              {auth !== '0' && <li className='nav-item bg-dark'><a href='orders' className='nav-link'>Orders</a></li>}
            </ul>
          </div>
        </div>
      </nav> */}

      <header className="Toolbar">
        <div className="DrawerToggle">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="Toolbar__Logo__24rue">
          <div className="Logo__Logo__2A07e">
            <img src={Logo} alt="myBurger" />
          </div>
        </div>
        <nav className="Toolbar__DesktopOnly__15Sc_">
          <ul className="NavigationItems">
            <li className="NavigationItem">
              <a aria-current="false" href="/">
                Burger Builder
              </a>
            </li>
            {auth === '0' && (
              <li className="NavigationItem">
                <a className="NavigationItem" aria-current="true" href="login">
                  Login
                </a>
              </li>
            )}
            {auth !== '0' && (
              <li className="NavigationItem">
                <a className="NavigationItem" aria-current="true" href="orders">
                  Orders
                </a>
              </li>
            )}
            {auth !== '0' && (
              <li className="NavigationItem">
                <a
                  onClick={Logout}
                  className="NavigationItem"
                  aria-current="true"
                  href="javascript:void(0)"
                >
                  Logout
                </a>
              </li>
            )}
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default Navbar
