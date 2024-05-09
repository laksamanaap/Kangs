    import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ServicesCard from './Card/ServicesCard';
import carIcon from '@/assets/icons/clarity_car-line.svg';

const Services = () => {
    const servicesValue = [
        {
            id: 1,
            icon: carIcon,
            title: 'Convenient Pick-Up Services',
            subtitle: 'Easy Pickup Service Right at Your Doorstep safely'
        },
        {
            id: 2,
            icon: carIcon,
            title: 'Convenient Pick-Up Services',
            subtitle: 'Easy Pickup Service Right at Your Doorstep safely'
        },
        {
            id: 3,
            icon: carIcon,
            title: 'Convenient Pick-Up Services',
            subtitle: 'Easy Pickup Service Right at Your Doorstep safely'
        },
        {
            id: 4,
            icon: carIcon,
            title: 'Convenient Pick-Up Services',
            subtitle: 'Easy Pickup Service Right at Your Doorstep safely'
        }
    ]

    return (
        <>
            <div className='services'>
                <Container className='services__container'>
                    <div className='services__caption'>
                        <span className='services__title'>Benefits For You</span>
                        <span className="services__subtitle">Enjoy tailored advantages designed to enhance your satisfaction.</span>
                    </div>
                    <Row className='gap-4'>
                        {servicesValue.map((service) => {
                            const { id, icon, title, subtitle } = service
                            return (
                                <Col>
                                    <ServicesCard id={id} icon={icon} title={title} subtitle={subtitle} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default Services