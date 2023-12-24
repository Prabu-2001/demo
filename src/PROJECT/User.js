import React from "react";
import ReactDOM from "react-dom/client";

function User (){
    return(
        <>
        <body className="user_body">
            <div className="user_webpage">
                <div className="login_form">
                <form action="" className="user_form">
                    <h1 className="user_heading">LOGIN</h1><br/><br/>
                    <div className="addp_input">
                        <label>User Id: </label>
                        <input type="text"></input>
                    </div>
                    <div className="addp_input">
                        <label>Password: </label>
                        <input type="password"></input>
                    </div>
                    <div className="user_button">
                        <div><button type="submit" className="sign">SIGN IN</button> </div>
                        <p className="forgot_para" align="center">FORGOT PASSWORD?</p>
                    </div>
                </form>
                </div>
                <div className="register_form">
                <form action="" className="addp_form">
                    <h1 className="user_heading">CREATE AN ACCOUNT</h1><br/><br/>
                    <p className="user_para">We never save credit card information.</p><br/>

<p className="user_para">Registering makes checkout fast and easy and<br/> saves your order information in your account.</p><br/>
                    <div className="addp_input">
                        <label>First Name: </label>
                        <input type="text"></input>
                    </div>
                    <div className="addp_input">
                        <label>Last Name: </label>
                        <input type="text"></input>
                    </div>
                    <div className="addp_input">
                        <label>E-mail: </label>
                        <input type="text" placeholder="example@gmail.com"></input>
                    </div>
                    <div className="addp_input">
                        <label>Password: </label>
                        <input type="password"></input>
                    </div>
                    <div className="addp_input">
                        <label>Confirm Password: </label>
                        <input type="password"></input>
                    </div>
                    <div className="user_button">
                        <div><button type="submit" className="sign" >CREATE</button> </div>
                    </div>
                </form>
                </div>
            </div>
        </body>
        </>
    )
}
export default User;
