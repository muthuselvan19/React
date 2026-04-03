import { useState } from "react";

const AboutFn = (props) => {

    const [state_val] = useState(0);
    return (
        <div className="about">
            <p>Count : {state_val}</p>
            <h4>Name : {props.name}</h4>
            <p>Location : Kumbakonam</p>
            <p>Contact : +91 XXXXX XXXXX</p>
        </div>
    );
}

export default AboutFn;