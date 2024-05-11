"use client";
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import BlogCard from './Card/BlogCard';
import tumpakSewuImage1 from '@/assets/tumpakSewu/tumpakSewu1.JPG';
import Tags from './Tags';

const Blog = () => {
    interface BlogProps {
        id: number,
        info: string,
        image: any,
        title: string,
        date: string,
        subtitle: string,
        tags: string[],
        author: string
    }

    const blogValues: Array<BlogProps> = [
        {
            id: 1,
            info: "6 min read",
            image: tumpakSewuImage1,
            title: "Tumpak Sewu Adventure",
            date: "24 Feb, 2024",
            subtitle: "Embark on an unforgettable adventure amidst the majestic landscapes of Tumpak Sewu. Join us for an exhilainfo journey through nature's wonders.",
            tags: ['Partner', 'Nature', 'Waterfall'],
            author: "Melmel"
        },
        {
            id: 2,
            info: "6 min read",
            image: tumpakSewuImage1,
            title: "Tumpak Sewu Adventure",
            date: "24 Feb, 2024",
            subtitle: "Embark on an unforgettable adventure amidst the majestic landscapes of Tumpak Sewu. Join us for an exhilainfo journey through nature's wonders.",
            tags: ['Partner', 'Nature', 'Waterfall'],
            author: "Melmel"
        },
        {
            id: 3,
            info: "6 min read",
            image: tumpakSewuImage1,
            title: "Tumpak Sewu Adventure",
            date: "24 Feb, 2024",
            subtitle: "Embark on an unforgettable adventure amidst the majestic landscapes of Tumpak Sewu. Join us for an exhilainfo journey through nature's wonders.",
            tags: ['Partner', 'Nature', 'Waterfall'],
            author: "Melmel"
        },

    ]


    return (
        <div className='blog'>
            <Container className='blog__container'>
                <Row className='align-items-center justify-content-center'>
                    <Col md={12} lg={6}>
                        <div className='blog__caption'>
                            <Tags title='Blog' />
                            <span className='blog__title'>Blog About Travelling</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='blog__subtitle-wrapper'>
                            <span className='blog__subtitle'>
                                Step into Our Travel World! Immerse yourself in captivating stories, gain invaluable tips, and uncover hidden gems from across the globe. Embark on unforgettable journeys with us and let's make every adventure count!
                            </span>
                            <Link href={'#'} className='packages__button-outline'>See All</Link>
                        </div>
                    </Col>
                </Row>
                <div className="blog-grid-container">
                    <div className="blog-grid-item">
                        <BlogCard {...blogValues[0]} />
                    </div>
                    <div className="blog-grid-item">
                        {blogValues.slice(1).map((packageValue, index) => (
                            <div key={index} className="blog-grid-item">
                                <BlogCard {...packageValue} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Blog