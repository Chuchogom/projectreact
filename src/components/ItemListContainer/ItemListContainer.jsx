import React, {useState, useEffect} from 'react';
import Counter from '../ItemCounter/Counter';
import { ItemList } from '../ItemList/itemList';
import { useParams } from 'react-router-dom';

const film = {"Title":"Doctor Strange in the Multiverse of Madness","Year":"2022","Rated":"PG-13","Released":"06 May 2022","Runtime":"126 min","Poster":"https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"74%"}],"imdbRating":"7.0","imdbID":"tt9419884","Type":"movie"}



export const ItemListContainer = () => {
  const {data, setData} = useState([]);

  const {type} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(film);
      }, 1500);
    });
    if (film) {
    getData.then(res => setData (res.filter (films => films.type === film)));
    } else {
    getData.then(res => setData(res));
    }
  },[type])



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