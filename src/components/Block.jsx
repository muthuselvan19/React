import { CDN_link } from "../utils/constant";
import { extraData } from "../utils/preLoadData";
import { Link } from "react-router";
const Block = (props) => {
    const { resData } = props;

    return (

        <div className="item">
            <img className="logo" src={resData.imgSrc} />
            <h3>{resData.name}</h3>
            <p>{resData.deleveryTime}</p>
            <p>{" ✪ " + resData.ratingData}</p>
            <p>{resData.para1}</p>
            <p>{resData.location}</p>

        </div>
    );
}

export default Block;