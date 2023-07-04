import { useState } from 'react'
import AddCategory from './components/AddCategory'
const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Sailor Moon'])

  const onAddCategory = () => {
    setCategories([...categories, 'Ouran Host Club'])
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={setCategories} />

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
