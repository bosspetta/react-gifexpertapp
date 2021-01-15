import React from 'react';

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
