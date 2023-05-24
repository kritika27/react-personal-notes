//useState ---->prop drilling
//context api
//context api + useReducer
//redux toolkit
import React,{createContext,useContext,useReducer} from "react";
import data from "./data";

const ProductContext=createContext();

//context api
//provider
//exporting
//usereducer

// const reducer=(state,action)=>{
    
//     return state;
// }

const reducer=(state,action)=>{
    if(action.type==="INC")
    {
        const newItem=state.product.map(el=>{
            if(el.id===action.payload)
             {
                 return {...el,
                 amount:el.amount+1}
             }
             return el;
        })
        return {...state,product:newItem}
    }
    else if(action.type==="DEC")
    {
        const newItem=state.product.map(el=>{
            if(el.id===action.payload)
             {
                 return {...el,
                 amount:el.amount-1}
             }
             return el;
        })
        return {...state,product:newItem}
    }
    return state;
}
// const [product,setProduct]=useState(data);
const initialState={
    product:data,
    amount:10
}
// reducer, ab
// function add(a,b)
// {
//     return a+b;
// }
const ProductProvider=({children})=>{

    // const [item,setItem]=useState("");
    const [state,dispatch]=useReducer(reducer,initialState);
//dispatch:"decides the type of action & initial parameter"

const inc=(id)=>{
    dispatch({type:"INC",payload:id});
}
    // const inc=(id)=>{
    //     dispatch({type:'INC',payload:id})
    // }

    const dec=(id)=>{
        dispatch({type:'DEC',payload:id})
    }
    return(
        <ProductContext.Provider value={{...state,inc,dec}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(ProductContext);
}

export {ProductContext,ProductProvider}
