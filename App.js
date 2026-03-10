import React from "react";
import ReactDOM from "react-dom/client"

const Heading = () => {
    return (
        <div className="head">
            <img className="headLogo" src="https://imgs.search.brave.com/cGMt3cU-_D6UBLYV8tAv1B3busPWpbuGEWBxqzuVEuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHSHp1/RUZwaHcvMi8wLzE2/MDB3L2NhbnZhLWJs/YWNrLWFuZC13aGl0/ZS1taW5pbWFsaXN0/LWNpcmNsZS1yZXN0/YXVyYW50LWZvb2Qt/bG9nby1WSmFhTlNt/ZElrYy5qcGc" alt="image not Found"></img>
            <h2 className="resName">Bailey Restaurent</h2>
            <ul className="tagList">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
}

const Body = () => {
    return (
        <div className="bodyContent">
            
        </div>
    );
}

const App = () => {
    return (
    <>
    <Heading/>
    <Body/>
    </>);
}

let creationRoot = ReactDOM.createRoot(document.getElementById("root"));


creationRoot.render(<App />);