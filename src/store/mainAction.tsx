import { action } from 'typesafe-actions'

const LANG_CHANGE = 'LANG_CHANGE'

export const langChange = (lang: string) => action(
  LANG_CHANGE,
  { lang }
)
