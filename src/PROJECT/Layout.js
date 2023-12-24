import { Link,Outlet } from "react-router-dom";

function Layout()
{

    const clickHandler = (e)=>{
            document.querySelector(".inputTag").classList.toggle("hidden");
    }

    return(
        <>
        <body className="layout_body">
            <div className="navbar">
                <div className="nav_left">
                    <div><Link to="/">HOME</Link></div>
                    <div><Link to="/Product_Layout">PRODUCT</Link></div>
                    <div><Link to="/Add_product">ADD-PRODUCT</Link></div>
                </div>
                <div className="nav_center">
                    <h1 className="layout_heading">E-Buy</h1>
                </div>
                <div className="nav_right">
                    <div><Link to="/User">LOGIN/REGISTER</Link></div>
                    <div className="input">
                    <div><input type="text" className="inputTag"/></div>
                    <div onClick={clickHandler}><i class="fa-solid fa-magnifying-glass search"></i></div>
                    </div>
                    <div><i class="fa-solid fa-cart-shopping"></i></div>
                    <div><i class="fa-solid fa-circle-info"></i></div>
                </div>
            </div>
        </body>
        <Outlet/>
        </>
    )
}
export default Layout;