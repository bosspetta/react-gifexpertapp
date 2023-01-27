import React from 'react'

export const GifItem = ({id, title, url}) => {
    return (
        <>
            <div className="card">
                <img src={url} alt="" />
                <p>{title}</p>
            </div>
        </>
    )
}
