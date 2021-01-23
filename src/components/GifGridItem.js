import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({id, title, url}) => {
  // console.log({id, title, url});
  return (
    <div className="card animate__animated animate__fadeIn">
      <img id={id} src={url} alt={title} />
      <p>
        <small>
          <strong>{title}</strong>
        </small>
      </p>
    </div>
  );
};

GifGridItem.protoTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
