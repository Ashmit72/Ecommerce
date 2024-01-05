import './CSS/ShopCategory.css';

import React, { useContext } from 'react';

import dropdown_icon from '../Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category' >
     <img className='shopcategory-banner' src={props.banner} alt="banner" />
     <div className="shopcategory-indexSort">
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="dropdown_icon" />
      </div>
     </div>
     <div className="shopcategory-products">
      {all_product.map((item,id)=>{
         if (props.category===item.category) {
          return <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
         }

         else{
          return null
         }
         
      })}
     </div>
    <div className="shopcategory-loadmore">
    Explore More
    </div> 
    </div>
  )
}

export default ShopCategory