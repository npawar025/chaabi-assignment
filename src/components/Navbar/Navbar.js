import React from 'react'
import header from '../../assets/images/header-background.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-wrapper">
        <img src={header} alt="admin detail header" className="admin-header" />
      </div>
    </div>
  );
}

export default Navbar