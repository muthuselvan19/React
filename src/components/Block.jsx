import { CDN_link } from "../utils/constant";
const Block = (props) => {
    const { resData } = props;
    // const {
    //     cloudinaryImageId,
    //     name,
    //     avgRating,
    //     cuisines,
    //     costForTwo,
    //     slaString
    // } = resData?.info  || {};

    if (!resData) {
        console.log("Wrong");
        return null;
    }
    return (
        <div className="item">
            <img className="logo" src={resData.imgSrc} />
            <h3>{resData.name}</h3>
            <p>{resData.deleveryTime}</p>
            <p>{resData.ratingData + " ✪ "}</p>
            <p>{resData.para1}</p>
            <p>{resData.location}</p>

        </div>
    );
}

export default Block;