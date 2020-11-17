import React from 'react';
import logo from '../img/logo_full_color.svg';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar--img" alt="Wolox-logo" />
      <div className="navbar-items">
        <a href="#" className="navbar-items--item">
          Inicio{' '}
        </a>
        <a href="#" className="navbar-items--item">
          Beneficios
        </a>
        <Link to="/register" className="navbar-items--button">
          Registro
        </Link>
      </div>
    </nav>
  );
}
