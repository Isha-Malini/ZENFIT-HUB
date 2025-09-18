import React from 'react'
import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='Footer'>

        <div className="footer-body">

        </div>

        <hr />
        <p>"Dont wish for it,work for it.ZENFIT does"</p>
        <p> ZENFIT- &copy; 2025 - All Rights Reserved</p>

    </div>
  )
}

export default Footer