import React from 'react'
import { useGlobalContext } from '../context';

export const Shoes = () => {

  const { amount, product }=useGlobalContext();

  console.log(product);
  return (
    <>
      <h1>Products</h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {
          product.map(el=>{
            return(
              <div key={el.id}>
                <img src={el.image} alt={el.name}/>
                <h2>{el.name}</h2>
                <p>${el.price}</p>
                <button>-</button>
                <p>{el.amount}</p>
                <button>+</button>
                <button>Add To Cart</button>
                <button>View in Detail</button>
                </div>
            )
          })
        }
      </div>
      
    </>
  )
}
