import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand px-2" style={{ backgroundColor: 'rgb(4, 224, 121)', height: '10vh', fontSize: '15px' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./images/navbar-brand.png" alt="Bootstrap" height="60" style={{ borderRadius: '50%' }} className="d-inline-block align-text-bottom" />
            FloraBERT
          </Link>
        </div>
        <div className="collapse navbar-collapse " id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
            <li className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`nav-link ${location.pathname === '/output' ? 'active' : ''}`}>
              <Link to="/output">Output</Link>
            </li>
            <li className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
