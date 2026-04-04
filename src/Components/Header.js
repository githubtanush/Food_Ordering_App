import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
// import the link from the react router dom  so that whole page is not refresh only which 
// part we want to change according to api only that refreshes
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
                {/* use Link to instead of a href so that it cannot refresh the whole page it 
                just refresh only the component that is changes that was why react is fast */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
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