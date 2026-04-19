import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState , useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Let's we create one local state variable which is called as useStatehook
  //This is superpowerful react variable whenever we need to update the variable
  //first of all simply we need to declare with default value like this
  //suppose i want to modify the value i don't modify directly using equal to sign i 
  //modify using setListOfRestaurants onClick of my button
  //so by using this my ui is sync with the data layer 
  //as soon as my listofRestaurants changes it will automatically sync with my data layer
  //That is why the useState hook is very efficient as they automatically update the ui 
  //according to the data layer automatically refreshes the ui and this is called render
  //whenever a state variable updates react re-render my component
  // const[listOfRestaurants,setListOfRestaurants] = useState([
  //   {
  //   id: "374532",
  //   name: "Kwality Walls Ice Cream and More",
  //   cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/d94597cd-a71c-43cb-adab-9668653c91d0_374532.JPG",
  //   area: "Chaura Bazar",
  //   locality: "Samrala Chowk",
  //   cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
  //   rating: 4.7,
  //   costForTwo: "₹300",
  //   deliveryTime: "15-20 mins",
  //   veg: true,
  //   isOpen: true,
  //   offer: "30% OFF upto ₹75"
  // },
  // {
  //   id: "85586",
  //   name: "Pahwa Ice Cream & Fast Food",
  //   cloudinaryImageId: "587d5289e68d8ddec8c44f26c5d820d4",
  //   area: "Chaura Bazar",
  //   locality: "Hargobind Nagar",
  //   cuisines: ["Fast Food", "Desserts", "Pizzas", "Burgers"],
  //   rating: 4.6,
  //   costForTwo: "₹250",
  //   deliveryTime: "25-30 mins",
  //   veg: true,
  //   isOpen: true,
  //   offer: "50% OFF"
  // },
  // {
  //   id: "683779",
  //   name: "Pizza software by chacha wow",
  //   cloudinaryImageId: "cfe5a6b2c186e42811f595e7ebfd7331",
  //   area: "Model Town Extension",
  //   locality: "Sant Fateh Singh Nagar",
  //   cuisines: ["Pizzas"],
  //   rating: 4.5,
  //   costForTwo: "₹199",
  //   deliveryTime: "55-65 mins",
  //   veg: true,
  //   isOpen: true,
  //   offer: "70% OFF upto ₹140"
  // },
  // {
  //   id: "841289",
  //   name: "Natural 3",
  //   cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5e10ed7c-092a-42b7-85db-433d2b7887b9_841289 (1).jpg",
  //   area: "Chaura Bazar",
  //   locality: "Civil Lines",
  //   cuisines: ["Indian", "Chinese", "South Indian"],
  //   rating: 4.4,
  //   costForTwo: "₹200",
  //   deliveryTime: "30-35 mins",
  //   veg: true,
  //   isOpen: true,
  //   offer: "70% OFF upto ₹140"
  // },
  // {
  //   id: "373112",
  //   name: "La Pino'z Pizza",
  //   cloudinaryImageId: "smqgbypnbivztchftkaa",
  //   area: "Model Town",
  //   locality: "Sector 32 A",
  //   cuisines: ["Pizzas", "Italian", "Pastas"],
  //   rating: 4.3,
  //   costForTwo: "₹300",
  //   deliveryTime: "30-35 mins",
  //   veg: false,
  //   isOpen: true,
  //   offer: "Items at ₹49"
  // },
  // {
  //   id: "969338",
  //   name: "Oven Story Pizza",
  //   cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/cf4958a2-0758-4ebf-b62f-e8d178b49497_969338.jpg",
  //   area: "Gill Road",
  //   locality: "Dhandari Kalan",
  //   cuisines: ["Pizzas", "Italian", "Desserts"],
  //   rating: 4.4,
  //   costForTwo: "₹400",
  //   deliveryTime: "30-40 mins",
  //   veg: false,
  //   isOpen: true,
  //   offer: "65% OFF upto ₹126"
  // },
  // {
  //   id: "1161918",
  //   name: "Cheese Burst Factory",
  //   cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/317f859f-b3a4-4aa7-809d-6fefb9357b1d_1161918.jpg",
  //   area: "Chaura Bazar",
  //   locality: "Chaura Bazar",
  //   cuisines: ["Italian", "Pizzas"],
  //   rating: 4.4,
  //   costForTwo: "₹299",
  //   deliveryTime: "25-30 mins",
  //   veg: false,
  //   isOpen: true,
  //   offer: "70% OFF upto ₹140"
  // },
  // {
  //   id: "385599",
  //   name: "Lambu Bombay Pav Bhaji",
  //   cloudinaryImageId: "eegxhmdrqdph9fl3fvet",
  //   area: "Chaura Bazar",
  //   locality: "Jain Colony",
  //   cuisines: ["Snacks"],
  //   rating: 4.5,
  //   costForTwo: "₹200",
  //   deliveryTime: "25-30 mins",
  //   veg: true,
  //   isOpen: true,
  //   offer: "70% OFF upto ₹140"
  // }
  // ]);
  //Now as we understand the concept we directly use mockData in useState
  //This is the superpower of react whenever our data changes react will re-render my component
  //This is the whole logic of react that is why react is the most powerful library for making
  //frontend application react is very fast and efficient in dom-manipulation
  //That logic of updating this ui is known as re-rendering and this is the super power of react 
  //React does not do anything it is only good and efficient at dom-manipulation
  //As soon as i changed my state variable it will automatically refreshes the component 
  //it keeps the data layer in sync with the ui  
  //Now we remove the mockData as we don't need anymore and we delete mockdata file from the project
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  //so now instead of updating our listofrestaurant we just updating our setFilteredRestaurant
  //and now onwards when i am rendering i am rendering it with filteredRestaurant in res-card
  const [searchText,setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  //Whenever state variables update, react triggers a reconcilation cycle(re-renders the whole component)
  console.log("Body rendered");
  
//but if we use this simple react variable it will not sync or update ui with data layer
//   let listOfRestaurants = [
//   {
//     id: "374532",
//     name: "Kwality Walls Ice Cream and More",
//     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/d94597cd-a71c-43cb-adab-9668653c91d0_374532.JPG",
//     area: "Chaura Bazar",
//     locality: "Samrala Chowk",
//     cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
//     rating: 4.7,
//     costForTwo: "₹300",
//     deliveryTime: "15-20 mins",
//     veg: true,
//     isOpen: true,
//     offer: "30% OFF upto ₹75"
//   },
//   {
//     id: "85586",
//     name: "Pahwa Ice Cream & Fast Food",
//     cloudinaryImageId: "587d5289e68d8ddec8c44f26c5d820d4",
//     area: "Chaura Bazar",
//     locality: "Hargobind Nagar",
//     cuisines: ["Fast Food", "Desserts", "Pizzas", "Burgers"],
//     rating: 4.6,
//     costForTwo: "₹250",
//     deliveryTime: "25-30 mins",
//     veg: true,
//     isOpen: true,
//     offer: "50% OFF"
//   },
//   {
//     id: "683779",
//     name: "Pizza software by chacha wow",
//     cloudinaryImageId: "cfe5a6b2c186e42811f595e7ebfd7331",
//     area: "Model Town Extension",
//     locality: "Sant Fateh Singh Nagar",
//     cuisines: ["Pizzas"],
//     rating: 4.5,
//     costForTwo: "₹199",
//     deliveryTime: "55-65 mins",
//     veg: true,
//     isOpen: true,
//     offer: "70% OFF upto ₹140"
//   },
//   {
//     id: "841289",
//     name: "Natural 3",
//     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5e10ed7c-092a-42b7-85db-433d2b7887b9_841289 (1).jpg",
//     area: "Chaura Bazar",
//     locality: "Civil Lines",
//     cuisines: ["Indian", "Chinese", "South Indian"],
//     rating: 4.4,
//     costForTwo: "₹200",
//     deliveryTime: "30-35 mins",
//     veg: true,
//     isOpen: true,
//     offer: "70% OFF upto ₹140"
//   },
//   {
//     id: "373112",
//     name: "La Pino'z Pizza",
//     cloudinaryImageId: "smqgbypnbivztchftkaa",
//     area: "Model Town",
//     locality: "Sector 32 A",
//     cuisines: ["Pizzas", "Italian", "Pastas"],
//     rating: 4.3,
//     costForTwo: "₹300",
//     deliveryTime: "30-35 mins",
//     veg: false,
//     isOpen: true,
//     offer: "Items at ₹49"
//   },
//   {
//     id: "969338",
//     name: "Oven Story Pizza",
//     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/cf4958a2-0758-4ebf-b62f-e8d178b49497_969338.jpg",
//     area: "Gill Road",
//     locality: "Dhandari Kalan",
//     cuisines: ["Pizzas", "Italian", "Desserts"],
//     rating: 4.4,
//     costForTwo: "₹400",
//     deliveryTime: "30-40 mins",
//     veg: false,
//     isOpen: true,
//     offer: "65% OFF upto ₹126"
//   },
//   {
//     id: "1161918",
//     name: "Cheese Burst Factory",
//     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/317f859f-b3a4-4aa7-809d-6fefb9357b1d_1161918.jpg",
//     area: "Chaura Bazar",
//     locality: "Chaura Bazar",
//     cuisines: ["Italian", "Pizzas"],
//     rating: 4.4,
//     costForTwo: "₹299",
//     deliveryTime: "25-30 mins",
//     veg: false,
//     isOpen: true,
//     offer: "70% OFF upto ₹140"
//   },
//   {
//     id: "385599",
//     name: "Lambu Bombay Pav Bhaji",
//     cloudinaryImageId: "eegxhmdrqdph9fl3fvet",
//     area: "Chaura Bazar",
//     locality: "Jain Colony",
//     cuisines: ["Snacks"],
//     rating: 4.5,
//     costForTwo: "₹200",
//     deliveryTime: "25-30 mins",
//     veg: true,
//     isOpen: true,
//     offer: "70% OFF upto ₹140"
//   }
// ];
   // if no dependency array => useEffect is call on every render 
   // if dependency array is empty = [] => useEffect will called on one initial render(just once)
   // if dependency array is [btnNameReact] => called everytime when btnName is updated 
   // and always remind that it will always called on their first initial render evertime unless the condition fulfil or not
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.909877&lng=75.8696337&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[4]);
        //Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.length);
    }

    //AFter this loading react will not return the next return keyword jsx until they not will not complete
    //there loading
    //This concept is known as conditional Rendering 
    // Rendering on the based of condition is known as conditional Rendering
    //we also use a ternary operator here instead of if and return 
    // if(listOfRestaurants.length === 0){
    //     // return <h1> loading.... </h1>
    //     return <Shimmer/>
    // }
    //conditional Rendering if the condition fulfill shimmer return not fulfil then return api rendering
    return (listOfRestaurants?.length === 0) ? (
    <Shimmer/> 
    ) : (
        <div className="Body">
            <div className="filter flex justify-between items-center">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-black rounded-xl" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button 
                    className="px-4 py-2 bg-green-100 m-4 rounded-2xl"
                    onClick={() => {
                        //Filter the restaurant cards and update the ui
                        //I will need the search text here
                       const filteredRestaurant = listOfRestaurants.filter(
                        //This is what amazing thing that we figure out 
                        //now i know that u stuck in uppercase and lower case of text that is case sensitive
                        // so we must convert both strings into lowercase Now whatever random order i can 
                        // search it will not give this error
                        //now u will go through when i am searching anything or doing filter onetime we got one restaurant or filtered restaurant
                        // and now we have searching around these 2 restaurants only and lost all 15 restaurants which was there now that
                        //filtered only working on that 2 restaurants but is this functionality good actually search will find out from all 15 restaurants 
                        // so it is a bug how u can solve this bug ? 
                        // mistake or bug over here we are just updating our listofrestaurants with filtered restaurants
                        // now we solve this bug by create another state variable for all the filtered restaurants
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        // (res)=>res.info.name === searchText we find direct exact name my bad 
                        //we search that should include that name
                        );
                        // setListOfRestaurants(filteredRestaurant);
                        setFilteredRestaurant(filteredRestaurant);

                    }}
                    >Search</button>
                </div>
                <div className="filterbtn m-4 p-4">
                <button
                    className="px-4 py-2 bg-green-100 m-4 rounded-2xl"
                    onClick={()=>{
                        // listOfRestaurants = listOfRestaurants.filter(
                        const filteredList = listOfRestaurants.filter(
                            (res)=> res.info.avgRating>4.1
                        );
                        // console.log(listOfRestaurants);
                        setFilteredRestaurant(filteredList);
                    }}
                    >
                    Top Rated Restaurants
                </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
        {/* // To make this frontend dynamic we pass props 
        //so what is props?
        //React functional component at the end of the day just a normal js function 
        //similarly props are just normal arguments of the function passing a props to 
        //a function is just passing an arguments to a function
        //In the react developer we say just passing props to a function and then what react will do?
        //React take all this properties wrap inside object and pass here as props
        //This data come from backend in json
        //passing props like this is messy now we pass directly  
        // and whatever we will be passing in left hand side of equal to take that props values in making card
        // This is the beauty or writing reusable components that we making props and reusable cards*/}
                {/* <Restaurantcard resName="Pizza Hut"
                cuisine = "Biryani, North Indian, Asian"/>
                <Restaurantcard resName="Subway"
                cuisine = "Sandwich, Salads, wrap" /> */}
                {/* This is not the good way can we loop over the array and create the card for each dynamically
                For that we use javascript map function we use map,filter,reduce functional programming
                <Restaurantcard resData={resList[0]}/>
                <Restaurantcard resData={resList[1]}/>
                <Restaurantcard resData={resList[2]}/>
                <Restaurantcard resData={resList[3]}/>
                <Restaurantcard resData={resList[4]}/>
                <Restaurantcard resData={resList[5]}/>
                <Restaurantcard resData={resList[6]}/> */}
                 {/* for using javascript we use curly brackets we have made the config driven ui suppose
                in future restaurant less or more as well as ui adjust so we made config driven ui 
                in console now there is an warning of each child in the key must have unique key property
                which is simply means that when we looping something then each key item should be uniquely represent 
                whenever you are looping onto anything anylist you have to give a key over there and u have to pass 
                unique id there what is unique id like resId types so always keep in mind to avoid that error whenever we
                looping or mapping something then we must have give a key to them but why we use the key? */}
                {/* { listOfRestaurants?.map((restaurant) =>( */}
                {/* from now we never modify the list of restaurants we just modify the filtered restaurant
                no , i am modifying the one time when i am getting data from api got it 
                but now my filteredRestaurant is empty there is nothing visible so what can i do so when i am 
                updating data we want the copy of filteredRestaurant as well as the listofRestaurants with whatever data i have got*/}
                {filteredRestaurant?.map((restaurant) => (
                    // This is the function which returning some piece of jsx use map lot of times in react so understand map
                    // <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    //To make this card clickable import the lia from react-router-dom via named import and start doing use it
                    //use Link component instead of anchor tag because it is not refresh our whole page
                    //Now key is also not on the restaurant it should be on the jsx
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {/* {
                        restaurant.data.promoted?(<RestaurantCardPromoted resData={restaurant}/>
                        ):(<RestaurantCard resData={restaurant}/>)
                    } */}
                    <RestaurantCard resData={restaurant}/>
                    </Link>
                ))}
            </div>             
        </div>
    )
};

export default Body;