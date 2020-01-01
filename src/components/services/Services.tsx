import React from 'react'
import { useTranslation } from 'react-i18next'

import './Services.scss'

const SERVICES = [
  {
    title: 'services.service1.title',
    text: 'services.service1.text',
    image: 'https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/background3.jpg?raw=true',
    contains: false
  },
  {
    title: 'services.service2.title',
    text: 'services.service2.text',
    image: 'https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/background.jpg?raw=true',
    contains: false
  },
  {
    title: 'services.service3.title',
    text: 'services.service3.text',
    image: 'https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/process.png?raw=true',
    contains: true
  }
]

interface ServicesProps {}

const Services = (props: ServicesProps) => {
  const { t } = useTranslation()

  return (
    <div className='Services'>
      <h1>{t('services.title')}</h1>
      <div className='Services-sections'>
        { SERVICES.map((service, index) => <ServiceSection key={`service-${index}`} {...service} />)}
      </div>
    </div>
  )
}

interface ServiceSectionProps {
  title: string,
  text: string,
  image: string,
  contains: boolean
}

const ServiceSection = (props: ServiceSectionProps) => {
  const {
    title,
    text,
    image,
    contains
  } = props

  const { t } = useTranslation()

  return (
    <div className='ServiceSection'>
      <div className='ServiceSection-area-background'>
        <img
          alt='<project>'
          className={`ServiceSection-image${contains ? ' contains' : ''}`}
          src={image}
        />
      </div>
      <div className='ServiceSection-area-text'>
        <h2 className='ServiceSection-text-title'>
          {t(title)}
        </h2>
        <p className='ServiceSection-text-content'>
          {t(text)}
        </p>
      </div>
    </div>
  )
}

export default Services
