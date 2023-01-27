import React, { useState } from 'react'

import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Big Lebowski'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories(prev => [newCategory, ...prev])
    }

    return (
        <>
            <h1>GifExpertApp billor!! 👋🏼</h1>
            <AddCategory onNewCategory={value => onAddCategory(value)} />
            {categories.map(category => <GifGrid key={category} category={category} />) }
        </>
    )
}
