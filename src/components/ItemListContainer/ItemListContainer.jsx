import React, {useState, useEffect} from 'react'
import Counter from '../ItemCounter/Counter'
import { ItemList } from '../ItemList/itemList'

const movies = [
{id:1}
]



export const ItemListContainer = () => {
  
  
  const {data, setData} = useState([]);


  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(movies);
      }, 3000);
    });
    getData.then(res => setData(res));

  },[ ])



  const onAdd = (quantity) =>
  {
    console.log(`Purchased ${quantity} units`)
  }
  return (
    <div>
      <div className='item__list'>
        <h1>Item List Container</h1>
        <Counter initial={1} stock={5} onAdd={onAdd} />
        <ItemList data = {data}/>
    </div>
    </div>
  )
}


export default ItemListContainer