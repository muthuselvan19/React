import Block from "./Block";

const Rescards = () => {
    return (
        <div className="bodyContent">
            {restaurentData.map((restaurant) => (
                <Block key={restaurant.id} resData={restaurant} />
            ))}

        </div>
    );
}
const restaurentData = [
    {
        id: 1,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
        headingText: "Devine Hotel",
        ratingData: "4.5",
        deleveryTime: "• 25-30 min",
        para1: "Mecxican Spicy Style",
        para2: "Near Kumbakonam",
    },
    {
        id: 2,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
        headingText: "A2B",
        ratingData: "3.9",
        deleveryTime: "• 20-30 min",
        para1: "Biryani, suttle Style",
        para2: "Near Papanasam",
    },
    {
        id: 3,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
        headingText: "Meat & Spice",
        ratingData: "4.2",
        deleveryTime: "• 25-30 min",
        para1: "Tandoori, Snacks , Entertinment",
        para2: "Kaveri Nagar",
    },
    {
        id: 4,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2",
        headingText: "Mixed Dhaba",
        ratingData: "4.0 • 28-33 min",
        para1: "Punjabi Style , Western Style",
        para2: "Mumbai",
    },
    {
        id: 5,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/Burger.png",
        headingText: "Burger Hub",
        ratingData: "4.1",
        deleveryTime: "• 25-30 min",
        para1: "Fast Food , French Fries",
        para2: "Chennai",
    },
    {
        id: 6,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sidigb8zqjfrfpkrtqgl",
        headingText: "Seank & Snack",
        ratingData: "4.3",
        deleveryTime: "• 25-30 min",
        para1: "Snacks, Tea , Hot Items",
        para2: "Vendiyur",
    },
    {
        id: 7,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dd519572ed1bed19de47e94186e743ea",
        headingText: "The Wrap Hub",
        ratingData: "3.8",
        deleveryTime: "• 25-30 min",
        para1: "Wraps, Rolls",
        para2: "Factory Road",
    },
    {
        id: 8,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xph0vf5pvbxjf8xchwjk",
        headingText: "Dhaba Hub",
        ratingData: "4.6",
        deleveryTime: "• 25-30 min",
        para1: "Dhaba",
        para2: "Sivaji Nagar",
    },
    {
        id: 9,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43",
        headingText: "Cafe Hawana",
        ratingData: "4.4",
        deleveryTime: "• 25-30 min",
        para1: "Tea , coffee , shawarma",
        para2: "Near 4-Road",
    },
];

export default Rescards;