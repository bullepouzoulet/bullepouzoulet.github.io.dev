import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './AppFooter.scss'

interface AppFooterProps {}

const AppFooter = (props: AppFooterProps) => {
  const { t } = useTranslation()

  return (
    <div className='AppFooter'>
      <div>
        {t('footer.title')}
      </div>
      <div>
        <Link
          className='AppFooter-link'
          to='/legal'>
          {t('footer.legal')}
        </Link>
      </div>
      <div>
        {t('footer.copyright')}
      </div>
      <div>
        {t('footer.bulle')}
      </div>
      <div>
        {t('footer.site')}
      </div>
    </div>
  )
}

export default AppFooter
