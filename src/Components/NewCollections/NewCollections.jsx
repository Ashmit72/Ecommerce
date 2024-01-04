import './NewCollections.css';

import React from 'react';

import new_collection from '../../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='new-collections' >
     <h1>NEW COLLECTIONS</h1>
     <hr />
     <div className="collections">
{
    new_collection.map((item,i)=>{
        return <Item
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    })
}
     </div>
    </div>
  )
}

export default NewCollections