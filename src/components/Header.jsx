import logo from '../assets/ResLogo.png'
import { LOGO_URL } from "../utils/constant";    //       <---------    Named export method 

const Header = () => {
    return (
        <div className="head">
            <img className="headLogo" src={LOGO_URL}></img>
            <h2 className="resName">Bailey Restaurent</h2>
            <ul className="tagList">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
}

export default Header;