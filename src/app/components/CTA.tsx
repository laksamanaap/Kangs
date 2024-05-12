'use client';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import bromoImage from '@/assets/bromo/bromo-1.jpg';
import sendMessageIcon from '@/assets/icons/send-message.svg'

const CTA = () => {
    const [messageValue, setMessageValue] = useState('');
    return (
        <div className='cta'>
            <Container>
                <div className='cta__image'>
                    <Image src={bromoImage} alt='cta-image' layout="fill" objectFit="cover" />
                    <div className="cta__content">
                        <div className="cta__text">
                            <span>Travel Without Limit</span>
                            <p>Embark on a journey without boundaries and discover the beauty of the world.</p>
                        </div>
                        <div className="cta__form-wrapper">
                            <div className="cta__form">
                                <div className='cta__form-message'>
                                    <input type="text" onChange={(e: any) => setMessageValue(e.target.value)} />
                                    <Image src={sendMessageIcon} alt="Send Message" className='cta__form-message-button' onClick={() => {
                                        const whatsappLink = `https://api.whatsapp.com/send/?phone=6281230664252&text=${encodeURIComponent(messageValue)}`;
                                        window.open(whatsappLink);
                                    }} />
                                    <span className='cta__form-summary'>Embark on your adventure by sending us a message!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cta__gradient"></div>
                </div>
            </Container>
        </div>
    );
};

export default CTA;
