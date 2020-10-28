import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=OmEP12EHcWDbUDwqjtwufA7Yht6siNu4';
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }));
    setImages(gifs);
  }

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
