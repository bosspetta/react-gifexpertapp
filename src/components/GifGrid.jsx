import React from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category )

    return (
        <>
            {
                isLoading && <h4>Loading…</h4>
            }
            <h3>{ category }</h3>
            <div className='card-grid'>
                {
                    images.map(( image ) => (
                        <GifItem
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
