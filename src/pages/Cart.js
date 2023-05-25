import React from 'react'
import { useCartContext } from '../cart_context';

export const Cart = () => {
  const { cart,clear,decProd,incProd,del} =useCartContext();
  console.log(cart);
  return (
    <>
     <div>
      {
        cart && cart.map(el=>{
          return(
            <div key={el.id}>
              <img src={el.image} alt={el.name}/>
              <h3>{el.name}</h3>
              <p>${el.price*el.amount}</p>
              <p>{el.color}</p>
              <p>{el.size}</p>
              <button onClick={()=>decProd(el.id)}>-</button>
              <p>{el.amount}</p>
              <button onClick={()=>incProd(el.id)}>+</button>
              <button onClick={()=>del(el.id)}>Del</button>
              </div>
          )
        })
      }
    </div> 
    <button onClick={clear}>Clear Cart</button>
    </>
  )
}
