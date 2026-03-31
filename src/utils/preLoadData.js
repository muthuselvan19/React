const restaurentData = [
    {
        id: 1,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nrfai67zmxzvabftr3th",
        name: "Devine Hotel",
        ratingData: "4.5",
        deleveryTime: "• 25-30 min",
        para1: "Mecxican Spicy Style",
        location: "Near Kumbakonam",
        menu:{
            items:[
                // {dish:"Veg Pizza's", price:"₹149 - ₹449"},
                {dish:"Margherita", price: "149"},
                {dish:"Paneer Makhani", price: "449"},
                {dish:"Corn Pizza", price:"99"},
                {dish:"Classic French Toast", price:"299"},
                // {dish:"Non-Veg Pizza's" , price:"₹149 - ₹549"},
                {dish:"Chicken Sausage Pizza", price:"149"},
                {dish:"Chicken Golden Delight" , price:"249"},
                {dish:"Pepper Barbecue Chicken",price:"449"},
                {dish:"Chicken Dominator" , price:"549"}

            ]
        }
    },
    {
        id: 2,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ve62ci9ua10mf994f8yk",
        name: "A2B",
        ratingData: "3.9",
        deleveryTime: "• 20-40 min",
        para1: "Biryani, suttle Style",
        location: "Near Papanasam",
        menu:{
            items:[
                {dish:"Idly(2)", price: "35"},
                {dish:"Medhu Vada", price: "25"},
                {dish:"Sambar Idly(2)" , price:"50"},
                {dish:"Rava Kesari" , price:"50"},
                {dish:"Ghee Pongal" , price:"60"},
                {dish:"Kal Dosa Vadai Curry" , price:"80"},
                {dish:"Ghee Roast" , price:"100"},
                {dish:"Onion Rava Masala Dosa" , price:"110"}
            ]
        }
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
        menu:{
            items:[
                {dish:"Chicken Fried Rice", price: "150"},
                {dish:"Egg Fired Rice", price: "100"},
                {dish:"Veg Fired Rice" , price:"90"},
                {dish:"Chilli Chicken" , price:"250"},
                {dish:"Chicken Shawarma" , price:"120"},
                {dish:"Mushroom Fired Rice" , price:"150"},
                {dish:"Dragon Rice",price:"200"},
            ]
        }
    },
    {
        id: 4,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2",
        name: "Mixed Dhaba",
        ratingData: "4.0",
        deleveryTime:"• 28-33 min",
        para1: "Punjabi Style , Western Style",
        location: "Mumbai",
        menu:{
            items:[
                {dish:"Dal Curry", price: "120"},
                {dish:"Panner Butter Masala", price: "200"},
                {dish:"Gobi Masala", price:"250"},
                {dish:"Kadai Chicken",price:"250"},
                {dish:"Butter Chicken",price:"Chicken Masala"},
                {dish:"Boiled Egg Curry", price:"230"},
                {dish:"Fish Masala" , price:"270"},
                {dish:"Fish Curry", price:"300"},
                {dish:"Prawn curry",price:"300"},
                {dish:"Prawn Masala", price:"400"}
            ]
        }
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
        menu:{
            items:[
                {dish:"Mega Zinger", price: "180"},
                {dish:"Burger Mixed", price: "160"},
                {dish:"Combo Meal" , price:"170"},
                {dish:"French Fires",price:"100 / 120"},
                {dish:"Zinger Combo" , price:"130"},
                {dish:"Chicken Hot Dog",price:"150"},
                {dish:"Hot Dog Double Combo" ,price:"160"},
            ]
        }
    },
    {
        id: 6,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sidigb8zqjfrfpkrtqgl",
        name: "Sneak & Snack",
        ratingData: "4.3",
        deleveryTime: "• 25-30 min",
        para1: "Snacks, Tea , Hot Items",
        location: "Vendiyur",
        menu:{
            items:[
                {dish:"Chicken Roll", price: "70"},
                {dish:"Veg Roll", price: "45"},
                {dish:"Chicken Egg Roll" ,price:"80"},
                {dish:"Chicken Chilly Roll",price:"90"},
                {dish:"Paneer Chilly Roll", price:"100"},
                {dish:"Chicken Cheese Shot" , price:"100"},
            ]
        }
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
        menu:{
            items:[
                {dish:"Chicken Wrap", price: "120"},
                {dish:"Paneer Wrap", price: "100"},
                {dish:"Egg Wrap", price:"80"},
                {dish:"Veggie Delight Wrap" , price:"90"},
                {dish:"Spicy Shawarma Wrap" , price:"130"},
                {dish:"Chicken Burger" , price:"110"},
                {dish:"Veg Burger", price:"70"},
                {dish:"French Fries",price:"60"}
            ]
        }
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
        menu:{
            items:[
                {dish:"Tandoori Roti", price: "15"},
                {dish:"Plain Naan", price: "40"},
                {dish:"Dal Tadka", price:"120"},
                {dish:"Paneer Butter Masala",price:"180"},
                {dish:"Chicken Curry" ,price:"200"},
                {dish:"Butter Chicken" ,price:"240"}
            ]
        }
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
        menu:{
            items:[
                {dish:"Veg Sandwich", price: "90"},
                {dish:"Chicken Sandwich", price: "130"},
                {dish:"Bread Omlet",price:"50"},
                {dish:"Chicken Burger",price:"120"},
                {dish:"Cold Coffee",price:"90"},
                {dish:"Fresh Lemon Juice" , price:"50"},
                {dish:"Soft Drinks",price:"40"},
                {dish:"Latte" , price:"110"}
            ]
        }
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
        location: "near SBI- Bank",
        menu:{
            items:[
                {dish:"Plain Dosa", price: "40"},
                {dish:"Ghee Dosa", price: "50"},
                {dish:"Butter Dosa" ,price:"60"},
                {dish:"Paper Roast" , price:"70"},
                {dish:"Cheese Masala Dosa",price:"100"},
                {dish:"Kara Dosa",price:"70"},
                {dish:"Podi Dosa" ,price:"75"},
                {dish:"Onion Dosa" , price:"70"}
            ]
        }
    },
    {
        id: 11,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wmbzewanaecin9ult2fx",
        name: "Geetha's Veg Restaurant",
        ratingData: "3.5",
        deleveryTime: "• 30-40 min",
        para1: "tiffin, Break-fast",
        location: "Kumbakonam",
        menu:{
            items:[
                {dish:"South Indian Meals", price: "120"},
                {dish:"Mini Meals", price:"90"},
                {dish:"Special Meals", price:"200"},
                {dish:"Pomgal" ,price:"60"},
                {dish:"Plain Dosa" ,price:"40"},
                {dish:"Masala Dosa" , price:"70"},
                {dish:"Gobi Manchurian" ,price:"120"},
                {dish:"Veg Pakada",price:"80"}
            ]
        }
    },
    {
        id: 12,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/a14b0e37-2bff-4c0d-aa68-c58b9b12cf83_600972.jpg",
        name: "OYALO Pizza",
        ratingData: "4.3",
        deleveryTime: "• 30-35 min",
        para1: "Pizza, Pasta , Sandwich",
        location: "Sathyam Nagar",
        menu:{
            items:[
                {dish:"Margherita Pizza", price: "120"},
                {dish:"Farmhouse Pizza", price: "160"},
                {dish:"Paneer Tikka Pizza" , price:"190"},
                {dish:"Chicken Pizza",price:"200"},
                {dish:"BBQ Chicken Pizza",price:"240"},
                {dish:"White Sauce Pasta" , price:"150"},
                {dish:"Chicken Pasta" ,price:"180"},
                {dish:"Chicken Nuggets(6 Pcs)" , price:"140"}
            ]
        }
    },
    {
        id: 13,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tu6ai8bxwsqtjd3hfcwu",
        name: "Billal Biryani",
        ratingData: "4.0",
        deleveryTime: "• 20-40 min",
        para1: "Biryani,Tandoori",
        location: "near IOB-Kamaraj Nagar",
        menu:{
            items:[
                {dish:"Chicken Biryani", price: "200"},
                {dish:"Mutton Biryani", price: "300"},
                {dish:"Chicken 65" , price:"160"},
                {dish:"Chicken Fry",price:"180"},
                {dish:"Pepper Chicken",price:"190"},
                {dish:"Chicken Gravy" ,price:"180"},
            ]
        }
    },
    {
        id: 14,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/28/f002070a-6066-4b55-bad4-ac57b3463a20_1133447.jpg",
        name: "Black Forest",
        ratingData: "4.8",
        deleveryTime: "• 40-60 min",
        para1: "Backery",
        location: "Kumbakonam",
        menu:{
            items:[
                {dish:"White Forest Cak-+e", price: "500"},
                {dish:"Black Forest Cake", price: "600"},
                {dish:"Red Velvet Cake" ,price:"650"},
                {dish:"Chocolate Truffle Cake", price:"700"},
                {dish:"Blueberry Cake" , price:"750"},
                {dish:"Toffee Caramel Cake" , price:"900"},
                {dish:"Plum Cake" , price:"400"}
            ]
        }
    },
    {
        id: 15,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/24/bdfd4ab9-05e0-479b-bce7-7a3fff18c029_1033200.jpg",
        name: "Alia's FC",
        ratingData: "4.1",
        deleveryTime: "• 15-30 min",
        para1: "Desert , Chinese , Mexican",
        location: "near vatti Nagar",
        menu:{
            items:[
                {dish:"Shawarma", price: "120"},
                {dish:"Sandwich", price: "130"},
                {dish:"Fried Chicken" , price:"150"},
                {dish:"French Fries" ,price:"80"},
                {dish:"Milkshakes" , price:"90"},
                {dish:"Combo(Shawarma + French Fires)" ,price:"180"},
            ]
        }
    },
    {
        id: 16,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2my2wuzxugfjrk9aedx",
        name: "Shifa Biryani",
        ratingData: "4.4",
        deleveryTime: "• 20-55 min",
        para1: "Biryani , Chicken Gravy",
        location: "Gandhi Road",
        menu:{
            items:[
                {dish:"Chicken Biryani", price: "150"},
                {dish:"Mutton Biryani", price: "250"},
                {dish:"Special Chickejn Biryani",price:"260"},
                {dish:"Special Mutton Biryani" , price:"350"},
                {dish:"Chicken 65" ,price:"150"},
                {dish:"Mutton Chukka" ,price:"200"},
                {dish:"Chicken Gravy" ,price:"150"},
                {dish:"Mutton Gravy" , price:"200"}
            ]
        }
    },
    {
        id: 17,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xrzjlzxqkfzz5s4bldr4",
        name: "Lassi Shop",
        ratingData: "4.9",
        deleveryTime: "• 10-30 min",
        para1: "Lassi ,Fresh Juice",
        location: "Near Bus Stand",
        menu:{
            items:[
                {dish:"Sweet Lassi", price: "90"},
                {dish:"Salted Lassi", price: "100"},
                {dish:"Mango Lassi" , price:"120"},
                {dish:"Oreo MilkShake",price:"140"},
                {dish:"Kitkat Shake" , price:"150"},
                {dish:"Mojito",price:"100"},
            ]
        }
    },
    {
        id: 18,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/f3063741-8f26-49b9-804f-5571ab242a39_932513.jpg",
        name: "Mo-Bowl",
        ratingData: "3.5",
        deleveryTime: "• 30-40 min",
        para1: "Chinise Fast-Food",
        location: "Annai Anujaman Nagar",
        menu:{
            items:[
                {dish:"Chicken Fried Rice", price: "150"},
                {dish:"Egg Fried Rice", price: "100"},
                {dish:"Chicken Noodles" ,price:"170"},
                {dish:"Egg Noodles" ,price:"130"},
                {dish:"Chilli Chicken" ,price:"200"},
                {dish:"Dragon Chicken" , price:"230"},
                {dish:"Spring Rolls" ,price:"120"},
            ]
        }
    },
    {
        id: 19,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/12/3e79292c-4386-4ce9-8db0-45ccf09ef1a5_1062573.jpg",
        name: "Ice-Cream Place",
        ratingData: "4.0",
        deleveryTime: "• 20-25 min",
        para1: "Reserved For Ice-Cream",
        location: "Sathyam Nagar",
        menu:{
            items:[
                {dish:"Chocolate Ice Cream", price: "120"},
                {dish:"Butterscotch", price: "150"},
                {dish:"Black Currant Ice Cream" , price:"150"},
                {dish:"Strawberry Ice Cream",price:"180"},
                {dish:"Brownie " ,price:"250"},
                {dish:"Hot Chocolate Fudge" , price:"280"},
            ]
        }
    },
    {
        id: 20,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/17/b6d8b595-56ad-4057-be64-0b2839bd0c36_1097508.jpg",
        name: "Gramathu Soup",
        ratingData: "4.2",
        deleveryTime: "• 20-30 min",
        para1: "Soup only",
        location: "Anna Nagar",
        menu:{
            items:[
                {dish:"Naatu Kozhi Soup", price: "100"},
                {dish:"Mutton Soup", price: "150"},
                {dish:"Thoothuvalai Soup",price:"70"},
                {dish:"Pepper Chicken Soup" ,price:"120"},
                {dish:"Crab Soup" ,price:"170"},
                {dish:"Vallarai Soup",price:"90"},
            ]
        }
    },
    {
        id: 21,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/90db5d79-c46d-4a98-ac2d-f5f0d751df8b_1170752.jpg",
        name: "Arabian Family Mandhi",
        ratingData: "4.1",
        deleveryTime: "• 20-40 min",
        para1: "Mandhi , Tanduri",
        location: "Kamaraj Nagar",
        menu:{
            items:[
                {dish:"Full Chicken Mandi", price: "700"},
                {dish:"Full Muttob Mandi", price: "1100"},
                {dish:"Special Mandi" ,price:"900"},
                {dish:"Fish Mandi" , price:"850"},
                {dish:"Grilled Chicken(Full)" ,price:"400"},
                {dish:"Family Special Mandi" ,price:"1200"},
            ]
        }
    },
    {
        id: 22,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/f6757736-8a0d-4867-95d7-8b4971cf35c8_940108%20(1).jpg",
        name: "Singapore Pan Cakes",
        ratingData: "3.2",
        deleveryTime: "• 50-60 min",
        para1: "Pan Cakes",
        location: "MahaMaga Kulam",
        menu:{
            items:[
                {dish:"Plain Pan Cake", price: "60"},
                {dish:"Chocolate Pan Cake", price: "90"},
                {dish:"Honey Pan Cake" ,price:"100"},
                {dish:"Strawberry Pan Cake" ,price:"120"},
                {dish:"Pineapple Pan Cake" ,price:"150"},
                {},
            ]
        }
    },
    {
        id: 23,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/30/f7fdb37f-0772-476b-8228-98617302a8ca_1244353%20(1).jpg",
        name: "Ocean Restaurant",
        ratingData: "3.9",
        deleveryTime: "• 20-40 min",
        para1: "Various Food's",
        location: "near 4-Road",
        menu:{
            items:[
                {dish:"Fish Curry Meal", price: "250"},
                {dish:"Prawn fry", price: "300"},
                {dish:"Fish Fry" ,price:"150"},
                {dish:"Fish Biryani" ,price:"200"},
                {dish:"Crab Masala Fry" ,price:"280"}
            ]
        }
    },
    {
        id: 24,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uby3hc3mhp5ttwi2yibm",
        name: "Vellammal Mess",
        ratingData: "4.0",
        deleveryTime: "• 15-35 min",
        para1: "South Indian Dishes",
        location: "MellaCavery",
        menu:{
            items:[
                {dish:"Meals(Unlimited)", price: "180"},
                {dish:"Sambar Rice", price: "100"},
                {dish:"Curd Rice" ,price:"70"},
                {dish:"Chicken Curry",price:"180"},
                {dish:"Mutton Chukka" ,price:"290"},
                {dish:"Fish fry" ,price:"200"},
            ]
        }
    },
    {
        id: 25,
        imgSrc:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/18/2ceaf546-8ded-4061-a47e-e51cedd962f9_1110020.jpg",
        name: "Tea Chat",
        ratingData: "3.7",
        deleveryTime: "• 10-20 min",
        para1: "Chat items , Tea , Coffee",
        location: "Swami-Malai",
        menu:{
            items:[
                {dish:"Tea", price: "20"},
                {dish:"Ginger Tea", price: "30"},
                {dish:"Masala Tea" ,price:"40"},
                {dish:"Green Tea" , price:"50"},
                {dish:"Coffee",price:"30"},
                {dish:"Boost / Horlicks" ,price:"45"},
            ]
        }
    }
];

export const extraData = [
    {
        id: "1047061",
        name: "Tnp Cafe And Restaurant",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/18/7ac6011c-62ce-4cf3-bd1a-2aa29add5e98_1047061.jpg",
        locality: "Satyam Nagar",
        costForTwo: "₹300 for two",
        cuisines: [
            "Chinese",
            "Desserts",
            "South Indian",
            "Indian",
            "Beverages",
            "Ice Cream",
            "Juices",
            "Salads",
            "Snacks",
            "Burgers"
        ]
    },
    {
        id: "904712",
        name: "Varnika Cafe",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/6/692fd4fd-bce0-4f8c-98f8-9307d0b6ce79_904712.jpg",
        locality: "Thiruvarur Bypass Junction",
        costForTwo: "₹300 for two",
        cuisines: [
            "Chinese",
            "Chaat",
            "Nepalese",
            "Beverages",
            "Juices",
            "Snacks",
            "Pizzas",
            "Burgers",
            "Cafe"
        ]
    },
    {
        id: "1312358",
        name: "Hotel Meenakshi Bhavan",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/19/1e576b65-8a93-4752-bde8-d73e8ca16f77_1312358.jpg",
        locality: "Satyam Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
            "South Indian"
        ]
    },
    {
        id: "1000485",
        name: "We Chai",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/3ad659f4-19dc-493b-9723-1dc3423be949_1000485.jpg",
        locality: "Shri Panchaswamy Shopping Complex",
        costForTwo: "₹300 for two",
        cuisines: [
            "Beverages",
            "Juices",
            "Snacks"
        ]
    },
    {
        id: "387760",
        name: "Rice n Spice",
        cloudinaryImageId: "dbypiulktu5aakj9skw6",
        locality: "Mahamaham West Street",
        costForTwo: "₹200 for two",
        cuisines: [
            "Desserts",
            "Chinese",
            "South Indian",
            "Ice Cream",
            "Biryani"
        ]
    },
    {
        id: "1295681",
        name: "Sundar Sapaattu Kadai",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/89d30470-9b48-4347-b11d-5a7cbad3f7ce_1295681.jpg",
        locality: "Satyam Nagar",
        areaName: "Satyam Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
            "South Indian"
        ]
    },
    {
        id: "480669",
        name: "Asai Unavagam",
        cloudinaryImageId: "ve62ci9ua10mf994f8yk",
        locality: "Bazaar Street",
        costForTwo: "₹100 for two",
        cuisines: [
            "South Indian"
        ]
    },
    {
        id: "243953",
        name: "Murari bombay sweets (since 1915)",
        cloudinaryImageId: "hi2nflmncyqgrhqalkkc",
        locality: "Thanjavur",
        costForTwo: "₹150 for two",
        cuisines: [
            "Desserts"
        ]
    },
    {
        id: "156328",
        name: "Kumbakonam Murari Sweets, sri balaji complex",
        cloudinaryImageId: "drtotiq98zgt8ucfdrub",
        locality: "Satyam nagar",
        costForTwo: "₹150 for two",
        cuisines: [
            "Desserts",
            "Chinese",
            "South Indian",
            "Burgers",
            "Pizzas",
            "Sweets"
        ]
    },
    {
        id: "1133447",
        name: "Black Forest",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/28/f002070a-6066-4b55-bad4-ac57b3463a20_1133447.jpg",
        locality: "Satyam Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
            "Bakery"
        ]
    },
    {
        id: "1045425",
        name: "Thallu Vandi Dosai Kadai",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/293c8bcd-3463-48ce-a7a0-f1efc041e86e_1045425 (1).jpg",
        locality: "Satyam Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Chinese",
            "South Indian"
        ]
    },
    {
        id: "1325047",
        name: "Shri kitchen",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/d675a75e-e555-49b2-98b1-c5cce00df34d_1157657.jpg",
        locality: "Satyam Nagar",
        costForTwo: "₹199 for two",
        cuisines: [
            "Snacks",
            "Pizzas",
            "Pastas",
            "Home Food",
            "South Indian",
            "Chettinad",
            "Indian"
        ]
    },
    {
        id: "1112256",
        name: "Tea Hut",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/12/c1b76363-5b9b-41de-ab53-2e89515602d9_1112256.jpg",
        locality: "Satyam Nagar",
        areaName: "Satyam Nagar",
        costForTwo: "₹300 for two",
        cuisines: [
            "Beverages",
            "Juices",
            "Snacks",
            "Burgers"
        ]
    },
    {
        id: "156323",
        name: "Shamby's Pizza Cafe",
        cloudinaryImageId: "nrfai67zmxzvabftr3th",
        locality: "Satyam Nagar",
        costForTwo: "₹300 for two",
        cuisines: [
            "Pastas",
            "Chinese",
            "Burgers",
            "Ice Cream",
            "Pizzas"
        ]
    },
    {
        id: "870776",
        name: "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/13/1542c41a-9365-4c54-8d2e-347c9978e7bd_870776.JPG",
        locality: "Kumbakonam",
        areaName: "Nageshwaran South Street",
        costForTwo: "₹250 for two",
        cuisines: [
            "Beverages",
            "Ice Cream",
            "Desserts"
        ]
    },
    {
        id: "843296",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/3b03b963-b8c6-45cf-a410-a33906aab5e0_843296.JPG",
        locality: "Thirunarayanapuram Street",
        costForTwo: "₹250 for two",
        cuisines: [
            "Desserts",
            "Ice Cream"
        ]
    },
    {
        id: "506390",
        name: "London Grill N Shake",
        cloudinaryImageId: "l6k56mj7ugphmv93onjy",
        locality: "Town High School Road\n",
        costForTwo: "₹150 for two",
        cuisines: [
            "Desserts",
            "Chinese",
            "Burgers",
            "Ice Cream",
            "Biryani"
        ]
    },
    {
        id: "825092",
        name: "Hotel Iyengar",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/089ac06d-d4dd-44e9-aafd-385456aa23f9_825092.jpg",
        locality: "Lakshmi Villas Street",
        costForTwo: "₹300 for two",
        cuisines: [
            "South Indian",
            "Chinese"
        ]
    },
    {
        id: "555788",
        name: "Imam Biryani",
        cloudinaryImageId: "pjuwjha0sgxob7dvqqgr",
        locality: "John Selvaraj Nagar",
        costForTwo: "₹150 for two",
        cuisines: [
            "Biryani",
            "Chinese"
        ]
    },


];
export default restaurentData;