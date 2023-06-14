import React from 'react';
import loaderStyles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={loaderStyles.loader}>
      <div className={loaderStyles.status}>
        <div className={loaderStyles.bubbleUp} />
        <div className={loaderStyles.bubbleUp} />
        <div className={loaderStyles.bubbleUp} />
        <div className={loaderStyles.bubbleDown} />
        <div className={loaderStyles.bubbleDown} />
        <div className={loaderStyles.bubbleDown} />
        <span>Loading</span>
      </div>
    </div>

  );
};

export default Loader;
