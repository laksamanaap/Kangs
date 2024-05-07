import React from 'react'
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';


const Hero = () => {
  return (
    <Carousel fade indicators={false}>
      <Carousel.Item>
        <img src="https://wanderingnomada.com/wp-content/uploads/2023/08/Pronowijo-Tumpak-Sewu-1-of-15.jpg" alt="First slide" className='w-100 img-fluid carousel-image' />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://wallpapers.com/images/hd/tumpak-sewu-indonesia-e65reo2nkpk73ps1.jpg" alt="First slide" className='w-100 img-fluid carousel-image' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://static.saltinourhair.com/wp-content/uploads/2018/09/23151253/tumpak-sewu-best-waterfall-indonesia-java-foot.jpg" alt="First slide" className='w-100 img-fluid carousel-image' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default Hero