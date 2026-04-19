import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
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
    const onlineStatus = useOnlineStatus();
    console.log("Header Render");
    return(
    // <div id="container"> //now we don't need it we describe className as we use tailwind
    //but for one i write there next i will change itself in code
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
        <div className="logo-container">
            <img className="w-56" 
            src={LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                {/* use Link to instead of a href so that it cannot refresh the whole page it 
                just refresh only the component that is changes that was why react is fast 
                and this should be strings */}
                <li className="px-4">Online Status : {onlineStatus?"✅":"🔴"} </li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contactus">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4">Cart</li>
                <button 
                    className="px-4"
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