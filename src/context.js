//useState ---->prop drilling
//context api
//context api + useReducer
//redux toolkit
import React,{createContext,useContext,useReducer} from "react";
import data from "./data";

const ProductContext=createContext();

const reducer=(state,action)=>{
    return state;
}
// const [product,setProduct]=useState(data);
const initialState={
    product:data,
    amount:10
}

const ProductProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <ProductContext.Provider value={{...state}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(ProductContext);
}

export {ProductContext,ProductProvider}
