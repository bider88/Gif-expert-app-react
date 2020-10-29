import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGif';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category)
      .then(imgs => setImages(imgs))
      .catch((err) => console.warn(err));;
  }, [ category ]);

  return (
    <>
      <h3>{ category }</h3>
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
