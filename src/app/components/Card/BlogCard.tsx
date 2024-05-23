'use clint'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import starIcon from '@/assets/icons/round_star.svg'
import clockIcon from '@/assets/icons/clock_line.svg'
import Image from 'next/image'
import Link from 'next/link'
import arrowRightIcon from '@/assets/icons/arrow-right-card.svg'

interface BlogCardProps {
    id: number,
    info: string,
    image: any,
    title: string,
    date: string,
    subtitle: string,
    tags: string[],
    author: string
}

const BlogCard = ({ id, info, image, title, date, tags, subtitle, author }: BlogCardProps) => {
    // console.log(tags, 'tags blog')
    return (
        <div className={`blog-card ${id === 1 ? 'first' : ''}`}>
            <div className='blog-card__rating'>
                <Image alt='star icon' src={clockIcon} />
                <span>{info}</span>
            </div>
            <Image src={image} alt={title} className={`blog-card__image ${id === 1 ? 'first' : ''}`} />
            <div className='blog-card__info'>
                <div className="blog-card__info-top">
                    <div className='d-flex gap-2'>
                        {tags.map((tag: string, index: number) => {
                            return (
                                <span key={index} className="blog-card__info-top-tags">{tag}</span>
                            )
                        })}
                    </div>
                    <div className='blog-card__price'>
                        <span className='blog-card__info-top-location'>{date} • {author}</span>
                    </div>
                </div>
                <div className="blog-card__info-bottom">
                    <div className='blog-card__info-bottom-caption'>
                        <span className='blog-card__info-bottom-caption-title'>{title}</span>
                        <span className={`blog-card__info-bottom-caption-sub ${id === 1 && 'first'}`}>{subtitle}</span>
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