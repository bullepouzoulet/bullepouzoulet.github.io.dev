const fnUseClassName = (className: string, props: any) => {
  if (props && props.className) {
    return `${className} ${props.className}`
  }
  return className
}

export const useClassName = fnUseClassName
