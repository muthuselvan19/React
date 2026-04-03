import React from "react";
import AboutCl from "./AboutCl";
import AboutFn from "./AboutFn";


class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor");


    }

    componentDidMount() {
        console.log("Parent Did Mount");
    }
    render() {
        console.log("Parent Render");
        return (
            <>

                <AboutCl />
            </>
        );
    }

}

export default AboutUs;