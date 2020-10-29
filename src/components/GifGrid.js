// import React, { useEffect, useState } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const {data: images, loading} = useFetchGifs(category);

  // useEffect(() => {
  //   getGifs(category)
  //     .then(imgs => setImages(imgs))
  //     .catch((err) => console.warn(err));;
  // }, [ category ]);

  return (
    <>
      <h3>{ category }</h3>

      { loading && <p>Cargando...</p>}

      <div className="gif-grid">
        {
          images.map( img => (
            <GifGridItem
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
}
