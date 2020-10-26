import React, { useState } from 'react'

export const GifExpertApp = () => {

  // const categories = ['Dragon Ball', 'Naruto', 'Sailor Moon'];
  const [categories, setCategories] = useState(['Dragon Ball', 'Naruto', 'Sailor Moon']);

  const hanldeAdd = () => {
    setCategories([...categories, 'Mazinger Z']);
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr/>
      <ol>
        {
          categories.map(category => <li key={ category }>{category}</li>)
        }
      </ol>
      <hr/>
      <button onClick={ hanldeAdd }>Agregar categoría</button>
    </>
  )
}
