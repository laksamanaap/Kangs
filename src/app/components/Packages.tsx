import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PackagesCard from './Card/PackagesCard';
import Link from 'next/link';
import tumpakSewuImage1 from '@/assets/tumpakSewu/tumpakSewu1.JPG';

const Packages = () => {

  const packageValues = [
    {
      id: 1,
      rating: "5.0",
      image: tumpakSewuImage1,
      title: "Tumpak Sewu Adventure",
      price: "18,68",
      subtitle: "Tumpak Sewu Adventure is amazing place for tracking",
      location: "Lumajang, Jawa Timur"
    },
    {
      id: 2,
      rating: "5.0",
      image: tumpakSewuImage1,
      title: "Tumpak Sewu Adventure",
      price: "18,68",
      subtitle: "Tumpak Sewu Adventure is amazing place for tracking",
      location: "Lumajang, Jawa Timur"
    },
    {
      id: 3,
      rating: "5.0",
      image: tumpakSewuImage1,
      title: "Tumpak Sewu Adventure",
      price: "18,68",
      subtitle: "Tumpak Sewu Adventure is amazing place for tracking",
      location: "Lumajang, Jawa Timur"
    },

  ]

  return (
    <>
      <div className='packages'>
        <Container className='packages__container'>
          <div className="packages__wrapper">
            <div className="packages__caption">
              <span className="packages__title">Choose Your Package</span>
              <span className="packages__subtitle">Explore the Latest Top Destinations From the exotic adventures</span>
            </div>
            <Link href={'#'} className='packages__button-outline'>See All</Link>
          </div>
          <Row className='gap-1'>
            {packageValues.map((packageValue) => {
              const { id, rating, image, title, price, location, subtitle } = packageValue;
              return (
                <Col lg={3} md={6} sm={12} xs={12}>
                  <PackagesCard
                    id={id}
                    rating={rating}
                    image={image}
                    title={title}
                    price={price}
                    location={location}
                    subtitle={subtitle}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Packages