const restaurentData = [
    {
        id: 1,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
        name: "Devine Hotel",
        ratingData: "4.5",
        deleveryTime: "• 25-30 min",
        para1: "Mecxican Spicy Style",
        location: "Near Kumbakonam",
    },
    {
        id: 2,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
        name: "A2B",
        ratingData: "3.9",
        deleveryTime: "• 20-40 min",
        para1: "Biryani, suttle Style",
        location: "Near Papanasam",
    },
    {
        id: 3,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
        name: "Meat & Spice",
        ratingData: "4.2",
        deleveryTime: "• 25-30 min",
        para1: "Tandoori, Snacks , Entertinment",
        location: "Kaveri Nagar",
    },
    {
        id: 4,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2",
        name: "Mixed Dhaba",
        ratingData: "4.0 • 28-33 min",
        para1: "Punjabi Style , Western Style",
        location: "Mumbai",
    },
    {
        id: 5,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/54474221db42da5b5db725b7b0ba8364",
        name: "Burger Hub",
        ratingData: "4.1",
        deleveryTime: "• 25-30 min",
        para1: "Fast Food , French Fries",
        location: "Chennai",
    },
    {
        id: 6,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sidigb8zqjfrfpkrtqgl",
        name: "Seank & Snack",
        ratingData: "4.3",
        deleveryTime: "• 25-30 min",
        para1: "Snacks, Tea , Hot Items",
        location: "Vendiyur",
    },
    {
        id: 7,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600/dd519572ed1bed19de47e94186e743ea",
        name: "The Wrap Hub",
        ratingData: "3.8",
        deleveryTime: "• 25-30 min",
        para1: "Wraps, Rolls",
        location: "Factory Road",
    },
    {
        id: 8,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xph0vf5pvbxjf8xchwjk",
        name: "Dhaba Hub",
        ratingData: "4.6",
        deleveryTime: "• 25-30 min",
        para1: "Dhaba",
        location: "Sivaji Nagar",
    },
    {
        id: 9,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43",
        name: "Cafe Hawana",
        ratingData: "4.4",
        deleveryTime: "• 25-30 min",
        para1: "Tea , coffee , shawarma",
        location: "Near 4-Road",
    },
    {
        id: 10,
        imgSrc:
            // "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png",
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/089ac06d-d4dd-44e9-aafd-385456aa23f9_825092.jpg",
        name: "Variety Dosa",
        ratingData: "4.2",
        deleveryTime: "• 30-40 min",
        para1: "Dosa & Varities",
        location: "near SBI- Bank"
    },
    {
        id: 11,
        imgSrc:
           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wmbzewanaecin9ult2fx",
        name: "Geetha's Veg Restaurant",
        ratingData: "3.5",
        deleveryTime: "• 30-40 min",
        para1: "tiffin, Break-fast",
        location: "Kumbakonam"
    },
    {
        id: 12,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/a14b0e37-2bff-4c0d-aa68-c58b9b12cf83_600972.jpg",
        name: "OYALO Pizza",
        ratingData: "4.3",
        deleveryTime: "• 30-35 min",
        para1: "Pizza, Pasta , Sandwich",
        location: "Sathyam Nagar"
    },
    {
        id: 13,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tu6ai8bxwsqtjd3hfcwu",
        name: "Billal Biryani",
        ratingData: "4.0",
        deleveryTime: "• 20-40 min",
        para1: "Biryani,Tandoori",
        location: "near IOB-Kamaraj Nagar"
    },
    {
        id: 14,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/28/f002070a-6066-4b55-bad4-ac57b3463a20_1133447.jpg",
        name: "Black Forest",
        ratingData: "4.8",
        deleveryTime: "• 40-60 min",
        para1: "Backery",
        location: "Kumbakonam"
    },
    {
        id: 15,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/24/bdfd4ab9-05e0-479b-bce7-7a3fff18c029_1033200.jpg",
        name: "Deli FC",
        ratingData: "4.1",
        deleveryTime: "• 15-30 min",
        para1: "Desert , Chinese , Mexican",
        location: "near vatti Nagar"
    },
    {
        id: 16,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2my2wuzxugfjrk9aedx",
        name: "Shifa Biryani",
        ratingData: "4.4",
        deleveryTime: "• 20-55 min",
        para1: "Biryani , Chicken Gravy",
        location: "Gandhi Road"
    },
    {
        id: 17,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xrzjlzxqkfzz5s4bldr4",
        name: "Lassi Shop",
        ratingData: "4.9",
        deleveryTime: "• 10-30 min",
        para1: "Lassi ,Fresh Juice",
        location: "Near Bus Stand"
    },
    {
        id: 18,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/f3063741-8f26-49b9-804f-5571ab242a39_932513.jpg",
        name: "Mo-Bowl",
        ratingData: "3.5",
        deleveryTime: "• 30-40 min",
        para1: "MOMO ,Chinise Fast-Food",
        location: "Annai Anujaman Nagar"
    },
    {
        id: 19,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/12/3e79292c-4386-4ce9-8db0-45ccf09ef1a5_1062573.jpg",
        name: "Ice-Cream Place",
        ratingData: "4.0",
        deleveryTime: "• 20-25 min",
        para1: "Reserved For Ice-Cream",
        location: "Sathyam Nagar"
    },
    {
        id: 20,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/17/b6d8b595-56ad-4057-be64-0b2839bd0c36_1097508.jpg",
        name: "Gramathu Soup",
        ratingData: "4.2",
        deleveryTime: "• 20-30 min",
        para1: "Soup only",
        location: "Anna Nagar"
    },
    {
        id: 21,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/90db5d79-c46d-4a98-ac2d-f5f0d751df8b_1170752.jpg",
        name: "Arabian Family Mandhi",
        ratingData: "4.1",
        deleveryTime: "• 20-40 min",
        para1: "Mandhi , Tanduri",
        location: "Kamaraj Nagar"
    },
    {
        id: 22,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/f6757736-8a0d-4867-95d7-8b4971cf35c8_940108%20(1).jpg",
        name: "Singapore Pan Cakes",
        ratingData: "3.2",
        deleveryTime: "• 50-60 min",
        para1: "Pan Cakes",
        location: "MahaMaga Kulam"
    },
    {
        id: 23,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/30/f7fdb37f-0772-476b-8228-98617302a8ca_1244353%20(1).jpg",
        name: "Ocean Restaurant",
        ratingData: "3.9",
        deleveryTime: "• 20-40 min",
        para1: "Various Food's",
        location: "near 4-Road"
    },
    {
        id: 24,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uby3hc3mhp5ttwi2yibm",
        name: "Vellammal Mess",
        ratingData: "4.0",
        deleveryTime: "• 15-35 min",
        para1: "South Indian Dishes",
        location: "MellaCavery"
    },
    {
        id: 25,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/18/2ceaf546-8ded-4061-a47e-e51cedd962f9_1110020.jpg",
        name: "Tea Chat",
        ratingData: "3.7",
        deleveryTime: "• 10-20 min",
        para1: "Chat items , Tea , Coffee",
        location: "Swami-Malai"
    }
];

export default restaurentData;