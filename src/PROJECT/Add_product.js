import React from "react";
import ReactDOM  from "react-dom/client";

function Add_products(){
    return(
        <>
        <body className="add_product_body">
            <div className="addp_webpage">
                <div>
                    <img src="https://i.pinimg.com/736x/f7/ed/48/f7ed48d8da0a4893ba27ca86c25b05b8--rock-outfit-rock-n-roll.jpg"/>
                </div>
                <form action="" className="addp_form">
                    <h1>Add-Product here...</h1>
                    <div className="addp_input">
                        <label>Product Id: </label>
                        <input type="text" placeholder="eg:123"></input>
                    </div>
                    <div className="addp_input">
                        <label>Product Name: </label>
                        <input type="text" placeholder="eg:book"></input>
                    </div>
                    <div className="addp_input">
                        <label>Product Category: </label>
                        <input type="text" placeholder="eg:Men or Women"></input>
                    </div>
                    <div className="addp_input">
                        <label>Product Price: </label>
                        <input type="text" placeholder="eg:200"></input>
                    </div>
                    <div className="addp_input">
                        <label>Product Quantity: </label>
                        <input type="text" placeholder="5"></input>
                    </div>
                    <div className="addp_button">
                        <div><button type="submit">Add-Product</button> </div>
                        <div><button type="reset">Reset</button></div>
                    </div>
                </form>
            </div>
        </body>
        </>
    )
} 
export default Add_products;