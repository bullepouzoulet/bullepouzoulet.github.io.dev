import React from 'react'
import { useTranslation } from 'react-i18next'

import './Services.scss'

interface ServicesProps {}

const Services = (props: ServicesProps) => {
  const { t } = useTranslation()

  return (
    <div className='Services'>
      <h1>{t('services.title')}</h1>
    </div>
  )
}

export default Services
