'use clint'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import starIcon from '@/assets/icons/round_star.svg'
import Image from 'next/image'
import Link from 'next/link'
import arrowRightIcon from '@/assets/icons/arrow-right-card.svg'

const BlogCard = ({ id, rating, image, title, price, location, subtitle }: any) => {
    return (
        <div className='blog-card'>
            <div className='blog-card__rating'>
                <Image alt='star icon' src={starIcon} />
                <span className='text-white'>{rating}</span>
            </div>
            <Image src={image} alt={title} className={`blog-card__image ${id === 1 && 'first'}`} />
            <div className='blog-card__info'>
                <div className="blog-card__info-top">
                    <span className="blog-card__info-top-location">{location}</span>
                    <div className='blog-card__price'>
                        <span className='blog-card__info-top-location'>${price}</span>
                    </div>
                </div>
                <div className="blog-card__info-bottom">
                    <div className='blog-card__info-bottom-caption'>
                        <span className='blog-card__info-bottom-caption-title'>{title}</span>
                        <span className='blog-card__info-bottom-caption-sub'>{subtitle}</span>
                    </div>
                    <Link href={"#"} className='blog-card__info-button text-white p-1'>
                        <Image src={arrowRightIcon} alt='arrow-right'></Image>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard