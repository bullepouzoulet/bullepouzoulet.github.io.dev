import React from 'react'
import { useTranslation } from 'react-i18next'

import './Projects.scss'

interface ProjectsProps {}

const Projects = (props: ProjectsProps) => {
  const { t } = useTranslation()

  return (
    <div className='Projects'>
      <h1>{t('projects.title')}</h1>
    </div>
  )
}

export default Projects
