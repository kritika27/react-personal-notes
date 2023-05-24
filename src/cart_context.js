//useState ---->prop drilling
//context api
//context api + useReducer
//redux toolkit
import React,{createContext,useContext,useReducer} from "react";
import data from "./data";

const CartContext=createContext();

const reducer=(state,action)=>{
    if(action.type==="CLEAR")
    {
        return {...state,cart:[]}
    }
    else if(action.type==="ADD")
    { const {id,amount,products,color,size } =action.payload;
       const newItem=state.cart.find(el=>el.id===action.payload);
       if(!newItem)
       {
           const item={
               id:id+color+size,
               amount:amount,
               price:products.price,
               name:products.name,
               image:products.image,
               color,
               size   
           }
           return {...state,cart:[...state.cart,item]}
       }
    }
    else if(action.type==="INC_PROD")
    {
        const newItem=state.cart.map(el=>{
            if(el.id===action.payload)
             {
                 return {...el,
                 amount:el.amount+1}
             }
             return el;
        })
        return {...state,cart:newItem}
    }
    else if(action.type==="DEC_PROD")
    {
        const newItem=state.cart.map(el=>{
            if(el.id===action.payload)
             {
                 return {...el,
                 amount:el.amount-1}
             }
             return el;
        })
        return {...state,cart:newItem}
    }
    else if(action.type==="DEL")
    {
        const newItem=state.cart.filter(el=>el.id!==action.payload)
        return {...state,cart:newItem}
    }
    return state;
}
// const [product,setProduct]=useState(data);
const initialState={
    cart:[],
    total:0
}

const CartProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);

    const incProd=(id)=>{
        dispatch({type:'INC_PROD',payload:id})
    }

    const decProd=(id)=>{
        dispatch({type:'DEC_PROD',payload:id})
    }

    const add=(id,amount,products,color,size)=>{
        dispatch({type:"ADD",payload:{id,amount,products,color,size}})
    }

    const del=(id)=>{
        dispatch({type:"DEL",payload:id})
    }

    const clear=()=>{
        dispatch({type:"CLEAR"});
    }
    return(
        <CartContext.Provider value={{...state,del,add,clear,incProd,decProd}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartContext,CartProvider}
