import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header 
 *  -logo
 *  -nav-items
 * Body 
 *  -Search
 *  -restaurant-container
 *  -restaurant-card
 *      -Img
 *      -Names of Res,Star Rating,cuisines,Time for delivery
 * Footer
 *  -Copyright
 *  -links
 *  -Address
 *  -Contact
 */

const Header = () => {
    return(
    <div id="container">
        <div id="logo-container">
            <img className="logo" 
            src="https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" />
        </div>
        <div id="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

// const StyleCard = {
//     backgroundColor: "#f0f0f0"
// }
const Restaurantcard = () =>{
    return(
        // In component we cannot add inline styling in component as same as we earlier done in html 
        //for this we have to make the style object
        // <div className="res-card" style={StyleCard}>
        // or we written object like that {{}} because it refer one style curly 
        // bracket and other nested curly bracket means {{}} that thing is object
        <div className="res-card" style = {{backgroundColor:"#f0f0f0"}}>
            <img    
                className="res-logo"
                alt = "res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/577bbe97-ad2f-41e0-b47b-c9a668fa7f45_70803.JPG"
            />
            <h3>Pizza Hut</h3>
            <h4>Biryani,NorthIndia,Asian</h4>
            <h4>4.1 stars</h4>
            <h4>40-45mins</h4>
        </div>
    )
}


const Body = () => {
    return(
        <div className="Body">
            <div className="search">Search</div>
            <div className="res-container">
        
                <Restaurantcard/>
                <Restaurantcard/>
                <Restaurantcard/>
                <Restaurantcard/>
                <Restaurantcard/>
                <Restaurantcard/>
                <Restaurantcard/>
            </div>            
        </div>
    )
};

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)