import logo from '../assets/ResLogo.png'
import { LOGO_URL } from "../utils/constant";    //       <---------    Named export method 
import { useState } from "react"
import { Link } from 'react-router';

const Header = () => {
    const [btVal, setBtnVal] = useState("Log-in");    //default Value of btVal  =  "log - in "
    console.log("Component is Rendered");
    return (
        <div className="head">
            <img className="headLogo" src={LOGO_URL}></img>
            <h2 className="resName">Bailey Restaurent</h2>
            <ul className="tagList">
                <li> <Link style={{textDecoration:"none"}} to="/">Home</Link></li>
                <li><Link style={{textDecoration:"none"}} to="/about">About Us</Link></li>
                <li><Link style={{textDecoration:"none"}} to="/contact">Contact Us</Link></li>
                <button className='btn_val' onClick={() => {
//on Click Event the Header component will Re-render and react use's Diff algorithm for it what changes happen's means that only Updated
                    btVal === "Log-in" ? setBtnVal("Log-out") : setBtnVal("Log-in");
                }}>{btVal}</button>
            </ul>
        </div>
    );
}

export default Header;