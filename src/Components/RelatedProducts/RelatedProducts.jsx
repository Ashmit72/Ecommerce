import './RelatedProducts.css';

import React from 'react';

import data_product from '../../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className='relatedproducts' >
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
          {
            data_product.map((item,i)=>{
              return <Item key={i} new_price={item.new_price} old_price={item.old_price} id={item.id} name={item.name} image={item.image} />
            })
          }
        </div>
    </div>
  )
}

export default RelatedProducts