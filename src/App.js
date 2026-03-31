import React from "react";
import ReactDOM from "react-dom/client"

import { RouterProvider, Outlet } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import Header from './components/Header'
import ResCard from "./components/Rescards";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import MenuItem from "./components/MenuItem";
import Error from "./components/Error";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

let creationRoot = ReactDOM.createRoot(document.getElementById("root"));



const RouterPath = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <ResCard />
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <MenuItem />,
            }
        ],
        errorElement: <Error />,
    }
]);

creationRoot.render(<RouterProvider router={RouterPath} />);