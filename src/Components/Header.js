import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    //UseState variable because we need a trigger that refreshed whole the 
    //Header component and refreshes the ui with normal js variable this is 
    // not possible as it will be updated the ui but it does not give a trigger
    // that helps react to start their reconcilation cycle so that was why we 
    // used react state variable as react need to track their variable
    //every time you click the button react will reconcilation the whole cycle
    //reconcile whole header component but changed only that specific part not 
    // whole component even load 
    const [btnName,setbtnName] = useState("Login");
    console.log("Header Render");
    return(
    <div id="container">
        <div id="logo-container">
            <img className="logo" 
            src={LOGO_URL} />
        </div>
        <div id="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button 
                    className="login"
                    onClick={()=>{
                        btnName==="Login"
                        ?setbtnName("Logout")
                        :setbtnName("Login")
                    }}
                    >
                        {btnName}
                    </button>
            </ul>
        </div>
    </div>
    );
};
export default Header;


//When do u need useState why do you need useState in depth so that we can 
//understand everything in depth