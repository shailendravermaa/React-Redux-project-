import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import RestaurantMenu from "./Components/RestaurantMenu";
import { BrowserRouter,Routes,Route } from "react-router";


// Header section: Let's build it

function App(){
    
    return(
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/Restaurant" element={<Restaurant></Restaurant>}></Route>
         <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
       </Routes>
       
       
       </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


