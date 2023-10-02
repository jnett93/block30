import React from 'react';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Stranger Things Project</div>
        <div className="footer-info">
          Fullstack Academy 2023. 
        </div>
        <ul className="footer-links">
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/posts">POSTS</NavLink></li>
        <li><NavLink to="/messages">MESSAGES</NavLink></li>
        <li><NavLink to="/login">LOGIN</NavLink></li>
        <li><NavLink to="/register">REGISTER</NavLink></li>
        </ul>
      </div>
    </footer>

  )

}

export default Footer;