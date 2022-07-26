import React from 'react'

export const ItemDetail = ({data}) => {
  return (
    <div className="container">
        <div className="detail">
            <img src="{data.backdrop_path}" alt="Imagen Top Gun" className="detail__image" />
            <div className="content">
                <h1>{data.original_title}</h1>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;