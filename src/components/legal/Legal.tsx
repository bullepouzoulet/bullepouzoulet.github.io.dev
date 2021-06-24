import React from 'react'
import { useTranslation } from 'react-i18next'

import './Legal.scss'

interface LegalProps {}

interface LegalPageBackground {
  src: string
}

const Legal = (props: LegalProps) => {
  const { t } = useTranslation()

  return (
    <div className='Legal'>
      <h1>
      {t('legal.title')}
      </h1>
    </div>
  )
}

export default Legal
