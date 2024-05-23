import React from 'react'
import Image from 'next/image'

interface ServiceCardProps {
  id: number,
  icon: any,
  title: string,
  subtitle: string
}

const ServicesCard = ({ id, icon, title, subtitle }: ServiceCardProps) => {
  return (
    <>
      <div className='services-card__wrapper'>
        <Image src={icon} alt={title} className='services-card__icon' />
        <div className="services-card__caption">
          <span className="services-card__title">{title}</span>
          <span className="services-card__subtitle">{subtitle}</span>
        </div>
      </div>
    </>
  )
}

export default ServicesCard