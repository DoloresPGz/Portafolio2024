import { useState } from 'react'
import AddCategory from './components/AddCategory'
const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Sailor Moon'])

  const onAddCategory = (newCategory) => {
    setCategories([...categories, newCategory])
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />

      <ol>
        {
            categories.map(categorie => {
              return <li key={categorie}>{categorie}</li>
            }
            )
        }
      </ol>
    </>
  )
}
export default GifExpertApp
