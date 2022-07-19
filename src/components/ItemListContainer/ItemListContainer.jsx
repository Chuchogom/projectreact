import React from 'react'
import Counter from '../ItemCounter/Counter'

export const ItemListContainer = () => {

  const onAdd = (quantity) =>
  {
    console.log(`Purchased ${quantity} units`)
  }
  return (
    <div>
      <div className='item__list'>
        <h1>Item List Container</h1>
        <Counter initial={1} stock={5} onAdd={onAdd} />
    </div>
    </div>
  )
}


export default ItemListContainer