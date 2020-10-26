import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>
      {
        categories.map(category => (
          <GifGrid
            key={ category }
            category={ category } />
        ))
      }
    </>
  )
}
