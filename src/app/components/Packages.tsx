import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PackagesCard from './Card/PackagesCard';
import Link from 'next/link';
import tumpakSewuImage1 from '@/assets/tumpakSewu/tumpakSewu1.JPG';
import Tags from './Tags';
interface PackageProps {
  id: number;
  rating: string;
  image: any;
  title: string;
  price: string;
  subtitle: string;
  location: string;
}

const Packages = () => {

  const packageValues: Array<PackageProps> = [
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
              <Tags title='Packages' />
              <span className="packages__title">Choose Your Package</span>
              <span className="packages__subtitle">Explore the Latest Top Destinations From the exotic adventures</span>
            </div>
            <Link href={'#'} className='packages__button-outline'>See All</Link>
          </div>
          <Row className='packages-card__card-row gap-md-5 gap-lg-1 justify-content-center'>
            {packageValues.map((packageValue, index) => {
              return (
                <Col key={index} md={12} lg={4} className='packages-card__card-col'>
                  <PackagesCard {...packageValue} />
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