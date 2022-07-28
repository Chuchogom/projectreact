import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/itemDetail';

// const API_KEY = 'api_key=f6975d315dd77e8bc0b5bfe3f873f617';
// const BASE_URL = 'https://api.themoviedb.org/3'
// const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;

// function getFilms(url) {

//   fetch(url).then(res => res.json).theb(data => {
//     console.log(data)
//   })
// }

// getFilms(API_URL);

const film = {"backdrop_path":"/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg","genre_ids":[28,18],"id":361743,"original_language":"en","original_title":"Top Gun: Maverick","popularity":7567.017,"poster_path":"/62HCnUTziyWcpDaBO2i1DX17ljH.jpg","release_date":"2022-05-24","title":"Top Gun: Maverick","video":false,"vote_average":8.4,"vote_count":1690}


export const ItemDetailContainer = () => {
  const [data,setData] = useState({});
  
  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(film);
      },1500);
    });

    getData.then(res => setData(res));
  }, [])


  return (
    <ItemDetail data={data} />
  )
}


export default ItemDetailContainer;