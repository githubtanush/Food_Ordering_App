import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
            </ul>
        </div>
    </div>
    );
};
export default Header;