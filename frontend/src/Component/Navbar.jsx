import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg  ">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className=" nav justify-content-center navbar-nav flex">
          <li className="nav-item ">
            <Link className="nav-link text-light nav " to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav text-light" aria-current="page" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
