import React from 'react'
import { useGlobalContext } from '../context';
import { useCartContext } from '../cart_context';
import { NavLink } from 'react-router-dom';
export const Shoes = () => {

  const { amount, product,inc,dec }=useGlobalContext();
  const { add } =useCartContext();
  const [color,setColor]=React.useState("");
  const [size,setSize]=React.useState("");

  // console.log(product);
  return (
    <>
      <h1>Products</h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {
          product.map(el=>{
            const {id,image,name}=el;
            return(
              <div key={id}>
                <img src={image} alt={name}/>
                <h2>{el.name}</h2>
                {
                  el.size.map((size,index)=>{
                    return(
                      <p key={index} onClick={()=>setSize(size)} 
                      >{size}</p>
                    )
                  })
                }
                <p>${el.price}</p>
                {
                  el.color.map((col,index)=>{
                    return(
                      <p key={index} onClick={()=>setColor(col)} 
                      style={{backgroundColor:col}}>{col}</p>
                    )
                  })
                }
                
                <button onClick={()=>dec(el.id)}>-</button>
                <p>{el.amount}</p>
                <button onClick={()=>inc(el.id)}>+</button>
                <button 
                onClick={()=>add(el.id,el.amount,el,color,size)}>
                  Add To Cart</button>
                <NavLink to={`/shoes/${el.id}`}><button>View in Detail</button></NavLink>
                </div>
            )
          })
        }
      </div>
      
    </>
  )
}
