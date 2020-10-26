import React, { useState } from 'react'
import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball', 'Naruto', 'Sailor Moon']);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>
      <ol>
        {
          categories.map(category => <li key={ category }>{category}</li>)
        }
      </ol>
    </>
  )
}
