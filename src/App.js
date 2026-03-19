import React from "react";
import ReactDOM from "react-dom/client"
import Header from './components/Header'
import ResCard from "./components/Rescards";


const App = () => {
    return (
        <>
            <Header />
            <ResCard />
        </>);
}

let creationRoot = ReactDOM.createRoot(document.getElementById("root"));


creationRoot.render(<App />);