const IconColors = {
  MAIN: 'ap-icon-color-main',
  DEFAULT: 'ap-icon-color-default',
  SECONDARY: 'ap-icon-color-secondary'
}

const fnUseIconColor = (clazz: string, color?: string) => {
  let result = Object.values(IconColors).find((col) => col === color) || IconColors.DEFAULT
  if (clazz) {
    return `${clazz} ${result}`
  }
  return result
}

export const useIconColor = fnUseIconColor
export const Colors = IconColors

export default IconColors
