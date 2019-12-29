import React from 'react'
import { useTranslation } from 'react-i18next'

import './AppFooter.scss'

interface AppFooterProps {}

const AppFooter = (props: AppFooterProps) => {
  const { t } = useTranslation()

  return (
    <div className='AppFooter'>
      {t('footer.title')}
    </div>
  )
}

export default AppFooter
