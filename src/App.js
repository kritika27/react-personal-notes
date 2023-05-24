import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {Shoes} from "./pages/Shoes";
import { Cart } from "./pages/Cart";
import { SingleShoe } from "./pages/SingleShoe";
import { Navbar } from "./components/Navbar";
export const App=()=>{

  return(
    <> 
      <Navbar/>
      <Routes>
<Route path="/" element={<Home/>} />
<Route path="/shoes" element={<Shoes/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/shoes/:id" element={<SingleShoe/>}/>
      </Routes>
      </>
  )
}