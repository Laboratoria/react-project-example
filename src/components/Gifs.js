import React from 'react';

const Gifs = ({ data }) => (
  <React.Fragment>
    {data.length > 0 &&
      data.map(gif => (
        <img src={gif.images.downsized_medium.url} alt={gif.title} />
      ))}
  </React.Fragment>
);

export default Gifs;
