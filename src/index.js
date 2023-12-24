import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./PROJECT/Layout";
import Home from "./PROJECT/Home";
import Productlayout from "./PROJECT/Product_Layout";
import Mens from "./PROJECT/Mens";
import Womens from "./PROJECT/Womens";
import Kids from "./PROJECT/Kids";
import Add_products from "./PROJECT/Add_product";
import User from "./PROJECT/User";
import "./index.css";

import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function App()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="Product_Layout" element={<Productlayout/>}>
                        <Route index element={<Mens/>}/>
                        <Route path="Product_Layout/Womens" element={<Womens/>}/>
                        <Route path="Product_Layout/Kids" element={<Kids/>}/> 
                    </Route>
                    <Route path="Add_product" element={<Add_products/>}/>
                    <Route path="User" element={<User/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(<App/>);

