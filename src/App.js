import React from "react";
import ReactDOM from "react-dom/client"
import Header from './components/Header'
import ResList from "./components/Rescards";
import Search from "./components/SearchBar"

const App = () => {
    return (
        <>
            <Header />
            <Search />
            <ResList />
        </>);
}

let creationRoot = ReactDOM.createRoot(document.getElementById("root"));


creationRoot.render(<App />);