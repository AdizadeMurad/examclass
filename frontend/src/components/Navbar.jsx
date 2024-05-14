import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
function Navbar() {
  return (
  <>
  <nav>
    <ul className='hero'> 
<Link to={'/'}><li>Home</li></Link>
<Link to={'/Detail'}><li>Detail</li></Link>
<Link to={'/AddProduct'}><li>AddProduct</li></Link>
<Link to={'/Admin'}><li>Admin</li></Link>
<Link to={'/UptadeProduct'}><li>UptadeProduct</li></Link>
    </ul>
  </nav>
  </>
  )
}

export default Navbar