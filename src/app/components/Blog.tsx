"use client";
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import BlogCard from './Card/BlogCard';
import tumpakSewuImage1 from '@/assets/tumpakSewu/tumpakSewu1.JPG';

const Blog = () => {

    const blogValue = [
        {
            id: 1,
            title: 'Tumpak Sewu Is Amazing Place For Bonding With Your Partner',
            tags: ['Partner', 'Nature', 'Waterfall']
        },
        {
            id: 2,
            title: 'Tumpak Sewu Is Amazing Place For Bonding With Your Partner',
            tags: ['Partner', 'Nature', 'Waterfall']
        },
        {
            id: 3,
            title: 'Tumpak Sewu Is Amazing Place For Bonding With Your Partner',
            tags: ['Partner', 'Nature', 'Waterfall']
        },
    ]

    const blogValues = [
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
                        <span className='blog__title'>Blog About Travelling</span>
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
                <Row style={{ height: '100%' }}>
                    <Col style={{ height: '100%', marginBottom: '1rem' }}>
                        <BlogCard {...blogValues[0]} />
                    </Col>
                    <Col xs={12} md={6}>
                        {blogValues.slice(1).map((packageValue, index) => (
                            <div key={index} style={{ marginBottom: '1rem' }}>
                                <BlogCard {...packageValue} />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blog