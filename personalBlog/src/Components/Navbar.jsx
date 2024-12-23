import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <li>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/eat">Eat</Link>
        <Link className='link' to="/travel">Travel</Link>
        <Link className='link' to="/about">About</Link>
        </li>
        <li>
            <button>sign-in</button>
            <button>sign-out</button>
        </li>
    </nav>
  )
}

export default Navbar
