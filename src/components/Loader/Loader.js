import React from 'react';
import loaderSrc from '../../assets/spinner.gif';

const Loader = () => {
  return (
    <div>
      <img style={{ width: '200px' }} src={loaderSrc} alt='dd' />
    </div>
  );
};

export default Loader;
