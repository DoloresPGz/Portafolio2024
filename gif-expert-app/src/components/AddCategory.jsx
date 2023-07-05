/* eslint-disable react/prop-types */
import { useState } from 'react'

const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    console.log(target.value)
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const newInputValue = inputValue.trim()
    if (newInputValue.length <= 1) return
    onAddCategory(newInputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={event => onInputChange(event)}
      />
    </form>
  )
}
export default AddCategory
