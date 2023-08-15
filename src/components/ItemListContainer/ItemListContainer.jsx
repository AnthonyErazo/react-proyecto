import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemListContainer = ({greeting,items}) => {
  return (
    <div className="container">
        <h1>{greeting}</h1>
        <div className="product-container">
        {items.map((product)=>{
          if(product.stock!=0){
            return (
              <ItemDetail 
              key={product.id} 
              id={product.id} 
              name={product.name}
              description={product.description}
              price={product.price}
              stock={product.stock}
              image="../../../vite.svg"
              />
            );
          }
        })}
        </div>
        
    </div>
  );
}

export default ItemListContainer