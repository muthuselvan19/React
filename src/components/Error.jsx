import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h3>OOP's Something Went Wrong</h3>
            <p>Our Page Doesn't Have this Path</p>
            <p>{err.status} : {err.statusText}</p>
        </div>
    );
}

export default Error;