import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'

const Navbar = () => {
  return (
    <section id="header">
      <a href="#"><img src={logo} alt="Logo" className="logo"/></a>

      <div>
        <ul id="navbar">
          <li><a className="active" href="Front End/index.html">Home</a></li>
          <li><a href="HTML/shop.html">Shop</a></li>
          <li><a href="HTML/blog.html">Blog</a></li>
          <li><a href="HTML/about.html">About</a></li>
          <li><a href="HTML/contact.html">Contact</a></li>
          <li id="lg-bag"><a href="HTML/cart.html"><i className="fa-solid fa-bag-shopping"></i></a></li>
          <a href="HTML/cart.html" id="close"><i className="fa-solid fa-xmark"></i></a>
        </ul>
      </div>
      
      <div id="mobile">
        <a href="HTML/cart.html"><i className="fa-solid fa-bag-shopping"></i></a>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  )
}

export default Navbar
