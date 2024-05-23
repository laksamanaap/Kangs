"use client";
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import React from 'react'
import Tags from './Tags';
import Accordions from './Accordions';

const FAQ = () => {

    return (
        <div className='faq'>
            <Container className='faq__container'>
                <div className="faq__caption">
                    <Tags title="FAQ" />
                    <span className="faq__title">Frequently Asked Question</span>
                    <span className="faq__subtitle">
                        Weve compiled a list of commonly asked questions to provide you with quick and informative answers
                    </span>
                </div>
                <Accordions />
            </Container>
        </div >
    )
}

export default FAQ