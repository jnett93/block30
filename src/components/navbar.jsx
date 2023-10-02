import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Stranger's Things</div>
      <ul className="nav-links">
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/posts">POSTS</NavLink></li>
        <li><NavLink to="/messages">MESSAGES</NavLink></li>
        <li><NavLink to="/login">LOGIN</NavLink></li>
      </ul>

    </nav>
  );
}

export default Navbar;