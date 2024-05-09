import React from 'react'
import Image from 'next/image'

const ServicesCard = ({ id, icon, title, subtitle }: any) => {
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