import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../src/styles/slider.css'

export default function slider() {
  return (
    <div>

       
<Carousel className="imageslider">
      <Carousel.Item>
        <img
          className="d-block w-100 m-auto "
          src="https://img.lovepik.com/photo/20211120/medium/lovepik-model-picture_500482572.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 m-auto background-color: rgba(0,0,255,.1)"
          src="https://st2.depositphotos.com/1006832/6924/i/600/depositphotos_69240673-stock-photo-fashion-shop-display-window-and.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 m-auto"
          src="https://www.enseignedemagasin.fr/wp-content/uploads/2016/11/vitrines-de-noel-magasin-13.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




    </div>
  )
}
