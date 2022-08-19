import React from 'react'
import "../../styles/header.css"
import image from "../../assets/imgs/imgHeader.jpeg"
import {Link} from 'react-router-dom'
export default function header() {
  return (
    <div className='appheader'>
        <nav className='nav-bar'>
         <div className='nav-bar'>
            <img className='imageheader' src={image} alt="img Header" />
         </div>
         <div className='div-bar'>
            <ul className='ul-bar'>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/Realisation'>Products</Link></li>
                <li>Service</li>
                <li>Nos Produit</li>
                <li><Link to='/Contactus'>Contact US</Link></li>
            </ul>
       
         </div>
       </nav>
    </div>
  )
}
