import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './Router/navbar.css';

const Navbar = () => {

  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <a className="navbar-brand" href="#">
        Add Sections
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar 