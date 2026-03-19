import Block from "./Block";
import restaurentData from "../utils/preLoadData";
import { useState } from "react";

const Rescards = () => {
    const [resData, setResData] = useState(restaurentData);

    return (

         <div className="resCards">

            { <div className="btn-tag">
                <button className="filter-btn" onClick={
                    () => {
                        const filterData = resData.filter(
                            (res) => res.ratingData > 4
                        );
                        setResData(filterData);
                    }
                }> Top Rated Restaurant's </button>
            </div> }

            <div className="bodyContent">
                {resData.map((restaurant) => (
                    <Block key={restaurant.id} resData={restaurant} />
                ))}

            </div>
       </div>
    );
}


export default Rescards;