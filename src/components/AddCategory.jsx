import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        // setCategories(prev => [inputValue, ...prev])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                aria-label="Buscar GIF's por categoría"
                placeholder='Buca un GIF'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
