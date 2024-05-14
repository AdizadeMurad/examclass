import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainProvider() {
  return (
<>
<Navbar></Navbar>
<Outlet></Outlet>
</>
  )
}

export default MainProvider