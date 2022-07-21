import React from 'react'
import './items.css'

export const Item = ({info}) => {
  return (
    <a href='' alt="" className='items__container'>
        <img src={info.image} alt="" />
        <p className='items__title'>
            {info.title}
        </p>
    </a>
  )
}
