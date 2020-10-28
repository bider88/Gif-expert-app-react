import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card-gif">
      <img className="gif-image" src={ url } alt={ title }/>
      <p>{ title }</p>
    </div>
  )
}
