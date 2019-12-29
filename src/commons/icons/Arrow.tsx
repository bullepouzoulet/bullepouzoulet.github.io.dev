import React from 'react'
import './Arrow.scss'

interface ArrowProps {}
interface ArrowState {}

const Arrow = (props: ArrowProps) => {
  return (
    <div className='Arrow'>
      <div className='Arrow-elem Arrow-main' />
      <div className='Arrow-elem Arrow-ext1' />
      <div className='Arrow-elem Arrow-ext2' />
    </div>
  )
}

export default Arrow
