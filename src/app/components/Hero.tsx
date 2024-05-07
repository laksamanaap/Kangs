import React from 'react'
import { Carousel } from 'react-bootstrap';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import Image from 'next/image';

const Hero = () => {
  return (
    <Carousel fade indicators={false}>
      <Carousel.Item>
        <img src="https://wanderingnomada.com/wp-content/uploads/2023/08/Pronowijo-Tumpak-Sewu-1-of-15.jpg" alt="First slide" className='w-100 img-fluid carousel-image' />
        <Carousel.Caption>
          <span className='carousel-text carousel-text__title'>The Stunning Beauty of East Java.</span>
          <p className='carousel-text carousel-text__subtitle'>
            Experience the breathtaking beauty of East Java! From the majestic peaks of Mount Bromo to the tranquil waters of Ijen Crater
          </p>
          <div className='mt-5'>
            <ButtonPrimary caption="See Packages" />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://wallpapers.com/images/hd/tumpak-sewu-indonesia-e65reo2nkpk73ps1.jpg" alt="First slide" className='w-100 img-fluid carousel-image' />
        <Carousel.Caption>
          <span className='carousel-text carousel-text__title'>Beauty of East Java: Dive In and Explore!</span>
          <p className='carousel-text carousel-text__subtitle'>
            Experience the breathtaking beauty of East Java! From the majestic peaks of Mount Bromo to the tranquil waters of Ijen Crater
          </p>
          <div className='mt-5'>
            <ButtonPrimary caption="Book Now!" />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://static.saltinourhair.com/wp-content/uploads/2018/09/23151253/tumpak-sewu-best-waterfall-indonesia-java-foot.jpg" alt="First slide" className='w-100 img-fluid carousel-image' />
        <Carousel.Caption>
          <span className='carousel-text carousel-text__title'>Countless Summer Getaways Await!</span>
          <p className='carousel-text carousel-text__subtitle'>
            Experience the breathtaking beauty of East Java! From the majestic peaks of Mount Bromo to the tranquil waters of Ijen Crater
          </p>
          <div className='mt-5'>
            <ButtonPrimary caption="Explore Now!" />
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default Hero