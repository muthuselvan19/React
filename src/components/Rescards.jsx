import Block from "./Block";
import restaurentData from "../utils/preLoadData";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

const Rescards = () => {
    const [resData, setResData] = useState(restaurentData);     //original Data will not be affected by any of the tag's ----> only for accessing Data Don't Modify
    const [copyofRes, setCopyofRes] = useState(restaurentData);   //by the Copy Data Alone we can modify and update anything

    const [res_Search, setSearchOfRes] = useState("");


    let dataUse = async () => {
        try {
            const val = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.9584554&lng=79.38850269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await val.json();

            // console.log("inside of useEffect");
            // console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map((val) => val));
            // setResData(data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (err) {
            console.log("What Happed show as : " + err);
        }
    }

    useEffect(() => {
        dataUse()
    }, []);


    return (

        <div className="resCards">
            <div className="search">
                <input type="text" className="input-box" value={res_Search} placeholder="Enter the Restaurent to Search" onChange={(e) => { setSearchOfRes(e.target.value) }}></input>
                <button className="lanch-box"
                    onClick={() => {
                        const filterdRes =
                            resData.filter((res) =>
                                res.name.toLowerCase().includes(res_Search.toLowerCase())
                            )
                        setCopyofRes(filterdRes);
                    }}>Go</button>
            </div>

            {
                <div className="btn-tag">
                    <button className="filter-btn" onClick={
                        () => {
                            const filterData = resData.filter(
                                (res) => res.ratingData > 4
                            );
                            setCopyofRes(filterData);
                        }
                    }> Top Rated Restaurant's </button>
                </div>
            }

            <div className="bodyContent">
                {copyofRes.map((restaurant) => (
                    <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`} style={{ textDecoration: "none", color: "inherit" }}><Block resData={restaurant} /></Link>
                ))}

        </div>
        </div >
    );
}

export default Rescards;