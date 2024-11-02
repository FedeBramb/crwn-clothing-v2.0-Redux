import React from 'react';
import './HomeImage.styles.scss';

const HomeImage = ({children}) => {
  return (
    <div className='container-home'>
      {children}
    </div>
  )
}

export default HomeImage