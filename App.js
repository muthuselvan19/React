import React from "react";
import ReactDOM from "react-dom/client"

let headVal = React.createElement("h2",
    { id: "headTag", className: "h2Tag" },
    "Hellloww World From React!!!!!!!"
);


const parentId = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "Child 1" },
        [React.createElement("h1", { id: "h1Tag" }, "H1 tag "), React.createElement("h2", { id: "h2Tag" }, "h2 Tag")]
    ), React.createElement("div", { id: "Child 2" },
        [React.createElement("h1", { id: "h1Tag" }, "H1 tag "), React.createElement("h2", { id: "h2Tag" }, "h2 Tag")]
    )]
);

console.log(parentId);


let creationRoot = ReactDOM.createRoot(document.getElementById("root"));

// console.log(creationRoot);

creationRoot.render(parentId);