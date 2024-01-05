import './Breadcrum.css';

import React from 'react';

import arrow_icon from '../../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum' >
      HOME <img src={arrow_icon} alt="arrow_icon" /> SHOP <img src={arrow_icon} alt="arrow_icon" /> {product.category} <img src={arrow_icon} alt="arrow_icon" /> {product.name} 
    </div>
  )
}

export default Breadcrum