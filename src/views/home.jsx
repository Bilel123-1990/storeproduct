import React from 'react'
import Header from '../../src/components/layout/header.jsx'
import Footer from '../../src/components/layout/footer.jsx'
import Slider from '../../src/components/slider.jsx'

export default function home() {
  return (
        <div>
            <Header/>
        
         <Slider/>
        <div>
            <Footer/>
        </div>
      
        </div>
        
  )
}
