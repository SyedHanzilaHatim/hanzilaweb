import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const navbar = () => {
  
  return (
    <>
      <nav>

        <Link to='/' className="logo">S.HANZILA</Link>
        <ul>
       <li><Link to='/about'>About</Link></li>
       <li><Link to='/workX'>WorkX</Link></li>
       <li><Link to='/contact'>Contact</Link></li>
      
        </ul>
      </nav>
    </>


  )
}

export default navbar