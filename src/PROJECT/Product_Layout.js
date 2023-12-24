import { Link,Outlet } from "react-router-dom";

function Productlayout(){
    return(
        <>
            <body className="product_nav_body">
                <div className="product_nav">
                    <div className="nav"><Link to="/Product_Layout">Mens</Link> </div>
                    <div className="nav"><Link to="Product_Layout/Womens">Womens</Link> </div>
                    <div className="nav"><Link to="Product_Layout/Kids">Kids</Link> </div>
                </div>
            </body>
            <Outlet/>
        </>
    )
}
export default Productlayout;