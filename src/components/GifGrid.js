// import React, { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">
          <img
            src="https://www.ipgvip.com/wp-content/themes/ipg/assets/images/loading-gif.gif"
            alt="Icono de carga"
          />
          <br />
          Cargando…
        </p>
      )}
      <li className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </li>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
