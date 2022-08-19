import React from 'react'
import "../../styles/footer.css"
import image1 from '../../assets/imgs/ck.png'
import image2 from '../../assets/imgs/dg.png'
import image3 from '../../assets/imgs/gucci.png'
export default function footer() {
  return (
    <div className='appfooter'>
         <h2>A propos</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
         <h2>Suivez-Nous</h2>
         <div className='iconimage'>
          <img className='imgfooter' src={image1} alt="img1" />
          <img className='imgfooter' src={image2} alt="img2" />
          <img className='imgfooter' src={image3} alt="img3" />

         </div>
    </div>
  )
}
