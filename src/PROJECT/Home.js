import React from "react";
import ReactDOM from "react-dom/client";

function Home(){
    return(
        <>
            <body className="home_body">
                <div className="home_banner-out">
                    <div className="home_banner">
                        <div className="home_banner-inside">
                            <h1 className="banner_head">You're Getting Warmer....</h1>
                            <p className="banner_body">Meet the stylish sneakers you need all season long</p>
                        </div>
                    </div>
                </div>  
                <div>
                    <h1 className="home_heading">Our Favorites</h1>
                    <hr/>
                </div>
                <div className="home_fav">
                    <div><img src="https://handcmediastorage.blob.core.windows.net/productimages/SE/SEPMA220-A01-128501-800px-1040px.jpg"height={400} width={300}/></div>
                    <div><img src="https://th.bing.com/th/id/OIP.4r5Gf0jgLlSyP9Ywthn20wHaHa?pid=ImgDet&rs=1"height={400} width={300}/></div>
                    <div><img src="https://www.wardrobemag.com/wp-content/uploads/2018/11/Rose-Gold-Women-Watches.jpg"height={400} width={300}/></div>
                    <div><img src="https://th.bing.com/th/id/OIP.GE40d9Uz4HDdEoTwUEhEcQHaHa?pid=ImgDet&rs=1"height={400} width={300}/></div>
                </div>
                <div>
                    <h1 className="home_heading">New Arrivals</h1>
                    <hr/>
                </div>
                <div className="home_fav">
                    <div><img src="https://th.bing.com/th/id/OIP.g5C7L0mGftAbikyQdZez5wHaHa?pid=ImgDet&rs=1"height={400} width={300}/></div>
                    <div><img src="https://cucufashionimg.linevast-hosting.in/images/JDB-3WHITE__2.jpg"height={400} width={300}/></div>
                    <div><img src="https://th.bing.com/th/id/OIP.N9hoGDKaYymTeUeyTT2CVgHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7"height={400} width={300}/></div>
                    <div><img src="https://th.bing.com/th/id/OIP.VLD2g9LgTQKoIITittfHUwHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"height={400} width={300}/></div>
                </div>
                <div>
                    <h1 className="home_heading">Combo Dress</h1>
                    <hr/>
                </div>
                <div className="home_fav">
                    <div><img src="https://th.bing.com/th?id=OIP.sCy4jo3D-Om6OohB1nvQmQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"height={400} width={300}/></div>
                    <div><img src="https://i.pinimg.com/originals/5d/83/f9/5d83f976915c9385f65dc80f0e1fb357.jpg"height={400} width={300}/></div>
                    <div><img src="https://i.etsystatic.com/18917198/r/il/9ea1ff/1807307533/il_fullxfull.1807307533_prve.jpg"height={400} width={300}/></div>
                    <div><img src="https://teelabs.in/wp-content/uploads/2021/06/sister-squad-navyblue.jpg"height={400} width={300}/></div>
                </div>
            </body>
        </>
    )
}
export default Home;