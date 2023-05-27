import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
//Browserrouter
//routes
//route
//link, ahref
//useHistory,useParams
export const SingleShoe = () => {
  const {id}=useParams();
  const {product} =useGlobalContext();

  const newItem=product.find(el=>el.id===id);
  console.log(newItem);
//   useEffect(()=>{
// fetch(`http://product${id}`).then().then
//   },[id])
  return (
    <div>SingleShoe
      <p>{id}</p>
      <p>{newItem.description}</p>
      <img src={newItem.image} alt="product"/>
    </div>
  )
}

//api-product
//api url to get data for id