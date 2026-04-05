const resList = [
  {
    info: {
      id: "70803",
      name: "Pizza Hut",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      costForTwo: "₹350 for two",
      cloudinaryImageId: "pizza_image",
      sla: { deliveryTime: 30 },
    },
    menu: [
      { card: { info: { id: "101", name: "Margherita Pizza", price: 19900 } } },
      { card: { info: { id: "102", name: "Farmhouse Pizza", price: 29900 } } },
      { card: { info: { id: "103", name: "Veg Extravaganza", price: 34900 } } },
    ],
  },

  {
    info: {
      id: "855550",
      name: "Domino's Pizza",
      cuisines: ["Pizzas", "Fast Food"],
      avgRating: 4.3,
      costForTwo: "₹300 for two",
      cloudinaryImageId: "dominos_image",
      sla: { deliveryTime: 25 },
    },
    menu: [
      { card: { info: { id: "201", name: "Peppy Paneer", price: 24900 } } },
      { card: { info: { id: "202", name: "Cheese Burst", price: 32900 } } },
      { card: { info: { id: "203", name: "Veg Loaded", price: 27900 } } },
    ],
  },

  {
    info: {
      id: "825670",
      name: "McDonald's",
      cuisines: ["Burgers"],
      avgRating: 4.2,
      costForTwo: "₹400 for two",
      cloudinaryImageId: "mcd_image",
      sla: { deliveryTime: 28 },
    },
    menu: [
      { card: { info: { id: "301", name: "Veg Burger", price: 9900 } } },
      { card: { info: { id: "302", name: "McAloo Tikki", price: 7900 } } },
      { card: { info: { id: "303", name: "McVeggie", price: 12900 } } },
    ],
  },

  {
    info: {
      id: "87259",
      name: "KFC",
      cuisines: ["Chicken"],
      avgRating: 4.1,
      costForTwo: "₹450 for two",
      cloudinaryImageId: "kfc_image",
      sla: { deliveryTime: 32 },
    },
    menu: [
      { card: { info: { id: "401", name: "Chicken Bucket", price: 49900 } } },
      { card: { info: { id: "402", name: "Zinger Burger", price: 19900 } } },
      { card: { info: { id: "403", name: "Popcorn Chicken", price: 17900 } } },
    ],
  },

  {
    info: {
      id: "262097",
      name: "Subway",
      cuisines: ["Healthy Food"],
      avgRating: 4.0,
      costForTwo: "₹250 for two",
      cloudinaryImageId: "subway_image",
      sla: { deliveryTime: 22 },
    },
    menu: [
      { card: { info: { id: "501", name: "Veggie Delight", price: 15000 } } },
      { card: { info: { id: "502", name: "Paneer Tikka Sub", price: 18000 } } },
      { card: { info: { id: "503", name: "Aloo Patty Sub", price: 14000 } } },
    ],
  },

  {
    info: {
      id: "1266032",
      name: "Biryani Blues",
      cuisines: ["Biryani"],
      avgRating: 4.3,
      costForTwo: "₹300 for two",
      cloudinaryImageId: "biryani_image",
      sla: { deliveryTime: 35 },
    },
    menu: [
      { card: { info: { id: "601", name: "Paneer Biryani", price: 24900 } } },
      { card: { info: { id: "602", name: "Veg Biryani", price: 19900 } } },
      { card: { info: { id: "603", name: "Hyderabadi Biryani", price: 29900 } } },
    ],
  },

  {
    info: {
      id: "1054007",
      name: "Haldiram's",
      cuisines: ["Snacks"],
      avgRating: 4.4,
      costForTwo: "₹200 for two",
      cloudinaryImageId: "haldiram_image",
      sla: { deliveryTime: 20 },
    },
    menu: [
      { card: { info: { id: "701", name: "Raj Kachori", price: 12000 } } },
      { card: { info: { id: "702", name: "Chole Bhature", price: 15000 } } },
      { card: { info: { id: "703", name: "Pav Bhaji", price: 13000 } } },
    ],
  },

  {
    info: {
      id: "302705",
      name: "Barbeque Nation",
      cuisines: ["BBQ"],
      avgRating: 4.5,
      costForTwo: "₹800 for two",
      cloudinaryImageId: "bbq_image",
      sla: { deliveryTime: 40 },
    },
    menu: [
      { card: { info: { id: "801", name: "Grill Platter", price: 59900 } } },
      { card: { info: { id: "802", name: "Paneer Tikka", price: 29900 } } },
      { card: { info: { id: "803", name: "Veg Seekh Kebab", price: 34900 } } },
    ],
  },
];

export default resList;