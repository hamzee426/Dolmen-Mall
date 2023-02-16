import React from 'react'
import Logocss from './Navbar.module.css'
import Logo from './Logo/dmlogo.png'
import './Navbar.css'


export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container">
    <a href='/'><img className={Logocss.logo} src={Logo} alt='Logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
 
    <div className="collapse navbar-collapse" id={Logocss.navbarNavDropdown}>
      <ul className="navbar-nav mx-auto" id={Logocss.spacing}>
       
        <li className="nav-item">
        <a className="nav-link mx-2" aria-current="page" href='/salogin'>Super Admin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> 
        </li>
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-current="page" href="/">Admin</a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="/dalogin">Department Admin</a> </li>
            <li><a className="dropdown-item" href="/talogin">Teanut Admin</a> </li>
          </ul>
        </li>

        <li className="nav-item dropdown" id={Logocss.ml}>
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-current="page" href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User</a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="/dulogin">Department User</a> </li>
            <li><a className="dropdown-item" href="/tulogin">Teanut User</a> </li>
          </ul>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
<div className="text-center p-3 d-none d-md-block">
</div>
    </>
  )
}
