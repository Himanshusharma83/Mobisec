import React from 'react';
import './Navbar.css';

const Navbar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <nav className={`navbar ${sidebarOpen ? 'expanded' : ''}`}>
      <button className="collapse-button" onClick={toggleSidebar}>
        <div className={`bar ${sidebarOpen ? 'change' : ''}`}></div>
        <div className={`bar ${sidebarOpen ? 'change' : ''}`}></div>
        <div className={`bar ${sidebarOpen ? 'change' : ''}`}></div>
      </button>
      <div className="logo">
        <img className='image' src='https://www.mobisec.in/assets/images/MOBISEC_logo.png' />
      </div>
      <div className="right-buttons">
        <button className="navbar-button"><span style={{fontWeight:'bold',fontSize:'1.1rem'}}>&#63;</span> Help</button>
        <button className="navbar-button"> <i  className="fa" style={{fontWeight:'bold',fontSize:'0.9rem'}}>&#xf007;</i> Dev-test</button>
        <button className="navbar-button logout"><i style={{fontSize:'1rem'}} className='fas'>&#xf2f5;</i> Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;