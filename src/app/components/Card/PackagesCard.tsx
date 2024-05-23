import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import starIcon from '@/assets/icons/round_star.svg'
import arrowRightIcon from '@/assets/icons/arrow-right-card.svg'
import { Container, Row, Col } from 'react-bootstrap';

interface PackagesCardProps {
  id: number,
  rating: string,
  image: any,
  title: string,
  price: string,
  subtitle: string,
  location: string
}

const PackagesCard = ({ id, rating, image, title, price, location, subtitle }: PackagesCardProps) => {
  return (
    <>
      <div className='packages-card'>
        <div className='packages-card__rating'>
          <Image alt='star icon' src={starIcon} />
          <span className='text-white'>{rating}</span>
        </div>
        <Image src={image} alt={title} className='packages-card__image' />
        <div className='packages-card__info'>
          <div className="packages-card__info-top">
            <span className="packages-card__info-top-location">{location}</span>
            <div className='packages-card__price'>
              <span className='packages-card__info-top-location'>${price}</span>
            </div>
          </div>
          <div className="packages-card__info-bottom">
            <div className='packages-card__info-bottom-caption'>
              <span className='packages-card__info-bottom-caption-title'>{title}</span>
              <span className='packages-card__info-bottom-caption-sub'>{subtitle}</span>
            </div>
            <Link href={"#"} className='packages-card__info-button text-white p-1'>
              <Image src={arrowRightIcon} alt='arrow-right'></Image>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PackagesCard