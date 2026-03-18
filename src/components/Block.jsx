const Block = (props) => {
    const { resData } = props;
    if (!resData) {
        console.log("Wrong");
        return null;
    }
    return (
        <div className="item">
            <img src={resData.imgSrc}/>
            <h3>{resData.headingText}</h3>
            <p>{resData.ratingData}</p>
            <i>{resData.deleveryTime}</i>
            <p>{resData.para1}</p>
            <p>{resData.para2}</p>

        </div>
    );
}

export default Block;