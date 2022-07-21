import React from 'react'
import './itemList.css'
import { Item } from '../Items/items'

export const ItemList = ({data = []}) => {
  return (
    data.map(film =>  <Item key={film.id} info={film} />)
  )
}
