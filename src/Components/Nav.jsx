import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center shadow h-26 bg-orange-50 w-full">
      <img
        src='../Resources/logo-no-background.svg'
        className="ml-6  h-24"
        alt="Logo"
        id="logo"
      />
     
<ul className="flex list-none ml-auto">
  <li className="ml-10">
    <Link to="/" className="nav-link">Home</Link>
  </li>
  <li className="ml-10">
    <Link to="/about" className="nav-link">About</Link>
  </li>
  <li className="ml-10">
    <Link to="/products" className="nav-link">Products</Link>
  </li>
  <li className="ml-10">
    <Link to="/contact" className="nav-link">Contact</Link>
  </li>
</ul>
      <Link to = '/cart' className="ml-auto h-16 mr-10"><img
        src='../Resources/cart.svg' 
        alt="Cart"
      /></Link>
    </nav>
  );
}