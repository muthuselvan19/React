import { useState } from "react";
import restaurentData from "../utils/preLoadData";
import { useParams } from "react-router";
const MenuItem = () => {

    const [menuVal, setMenuVal] = useState(restaurentData)


    const { id } = useParams();

    const restaurant = restaurentData.find(
        (res) => res.id.toString() === id.toString()
    );

    if (!restaurant) {
        <h1>Menu List Not Available</h1>
    }

    return (
        <div>
            <h2 style={{textAlign:"center"}}>{restaurant.name}</h2>
            <h3>Menu</h3>
            <ul className="menu_List" style={{listStyle:"none"}}>
                {restaurant.menu.items.map((item, index) => (
                    <li key={index}>
                        <strong>{item.dish}</strong> : <strong>{"₹ "+ item.price}</strong>
                    </li>
                ))}
            </ul>
        </div>

    );
}


const all_ResMenu_List = () => {
    return (
        menuVal.map((res, indexV) => (
            <div key={indexV}>
                <h3>Menu</h3>
                <ul>
                    {res.menu.items.map((item, index) => (
                        <li key={index}>
                            <strong>{item.dish}</strong> : <strong>{item.price}</strong>
                        </li>
                    ))}
                </ul>
            </div>
        )));
}
export default MenuItem;