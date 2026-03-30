import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header 
 *  -logo
 *  -nav-items
 * Body 
 *  -Search
 *  -restaurant-container
 *  -restaurant-card
 *      -Img
 *      -Names of Res,Star Rating,cuisines,Time for delivery
 * Footer
 *  -Copyright
 *  -links
 *  -Address
 *  -Contact
 */

const resList = [
  {
    id: "374532",
    name: "Kwality Walls Ice Cream and More",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/d94597cd-a71c-43cb-adab-9668653c91d0_374532.JPG",
    area: "Chaura Bazar",
    locality: "Samrala Chowk",
    cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
    rating: 4.7,
    costForTwo: "₹300",
    deliveryTime: "15-20 mins",
    veg: true,
    isOpen: true,
    offer: "30% OFF upto ₹75"
  },
  {
    id: "85586",
    name: "Pahwa Ice Cream & Fast Food",
    cloudinaryImageId: "587d5289e68d8ddec8c44f26c5d820d4",
    area: "Chaura Bazar",
    locality: "Hargobind Nagar",
    cuisines: ["Fast Food", "Desserts", "Pizzas", "Burgers"],
    rating: 4.6,
    costForTwo: "₹250",
    deliveryTime: "25-30 mins",
    veg: true,
    isOpen: true,
    offer: "50% OFF"
  },
  {
    id: "683779",
    name: "Pizza software by chacha wow",
    cloudinaryImageId: "cfe5a6b2c186e42811f595e7ebfd7331",
    area: "Model Town Extension",
    locality: "Sant Fateh Singh Nagar",
    cuisines: ["Pizzas"],
    rating: 4.5,
    costForTwo: "₹199",
    deliveryTime: "55-65 mins",
    veg: true,
    isOpen: true,
    offer: "70% OFF upto ₹140"
  },
  {
    id: "841289",
    name: "Natural 3",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5e10ed7c-092a-42b7-85db-433d2b7887b9_841289 (1).jpg",
    area: "Chaura Bazar",
    locality: "Civil Lines",
    cuisines: ["Indian", "Chinese", "South Indian"],
    rating: 4.4,
    costForTwo: "₹200",
    deliveryTime: "30-35 mins",
    veg: true,
    isOpen: true,
    offer: "70% OFF upto ₹140"
  },
  {
    id: "373112",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "smqgbypnbivztchftkaa",
    area: "Model Town",
    locality: "Sector 32 A",
    cuisines: ["Pizzas", "Italian", "Pastas"],
    rating: 4.3,
    costForTwo: "₹300",
    deliveryTime: "30-35 mins",
    veg: false,
    isOpen: true,
    offer: "Items at ₹49"
  },
  {
    id: "969338",
    name: "Oven Story Pizza",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/cf4958a2-0758-4ebf-b62f-e8d178b49497_969338.jpg",
    area: "Gill Road",
    locality: "Dhandari Kalan",
    cuisines: ["Pizzas", "Italian", "Desserts"],
    rating: 4.4,
    costForTwo: "₹400",
    deliveryTime: "30-40 mins",
    veg: false,
    isOpen: true,
    offer: "65% OFF upto ₹126"
  },
  {
    id: "1161918",
    name: "Cheese Burst Factory",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/317f859f-b3a4-4aa7-809d-6fefb9357b1d_1161918.jpg",
    area: "Chaura Bazar",
    locality: "Chaura Bazar",
    cuisines: ["Italian", "Pizzas"],
    rating: 4.4,
    costForTwo: "₹299",
    deliveryTime: "25-30 mins",
    veg: false,
    isOpen: true,
    offer: "70% OFF upto ₹140"
  },
  {
    id: "385599",
    name: "Lambu Bombay Pav Bhaji",
    cloudinaryImageId: "eegxhmdrqdph9fl3fvet",
    area: "Chaura Bazar",
    locality: "Jain Colony",
    cuisines: ["Snacks"],
    rating: 4.5,
    costForTwo: "₹200",
    deliveryTime: "25-30 mins",
    veg: true,
    isOpen: true,
    offer: "70% OFF upto ₹140"
  }
];


const Header = () => {
    return(
    <div id="container">
        <div id="logo-container">
            <img className="logo" 
            src="https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" />
        </div>
        <div id="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

// const StyleCard = {
//     backgroundColor: "#f0f0f0"
// }

//props is an object over here also instead of write props we structure it in fly itself like that {resName,cuisines}
//This is not something in react this is javascript
// const Restaurantcard = ({resName,cuisines})=>{ 
const Restaurantcard = (props) =>{
    // console.log(props);
    // const {resName,cuisine} = props;
    const {resData} = props;
    // const {} = resData?.data; optional chaining 
    //now by destructuring we remove resdata.cloudinaryImageId -> cloudinaryImageId;
    const {cloudinaryImageId,name,cuisines,deliveryTime,costForTwo,rating} = resData;
    return(
        // In component we cannot add inline styling in component as same as we earlier done in html 
        //for this we have to make the style object
        // <div className="res-card" style={StyleCard}>
        // or we written object like that {{}} because it refer one style curly 
        // bracket and other nested curly bracket means {{}} that thing is object
        <div className="res-card" style = {{backgroundColor:"#f0f0f0"}}>
            <img    
                className="res-logo"
                alt = "res-logo"
                height="250px"
                width="200px"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId}
            />
            {/* <h3>Pizza Hut</h3>
            <h4>Biryani,NorthIndia,Asian</h4>
            <h4>4.1 stars</h4>
            <h4>40-45mins</h4> 
            //This is complicated ui that resData.data or etc we will destructure it*/}
            {/* <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4> */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{rating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}


const Body = () => {
    return(
        <div className="Body">
            <div className="search">Search</div>
            <div className="res-container">
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
                looping or mapping something then we must have give a key to them but why we use the key?*/
                resList.map((restaurant) => (
                    // This is the function which returning some piece of jsx use map lot of times in react so understand map
                    <Restaurantcard key={restaurant.id} resData={restaurant}/>
                ))}
            </div>             
        </div>
    )
};

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)


//what we majorally says or major learning?
//when u dynamically passes some data to a component we have simply passing using props we pass any number of props we wish for
//and then react will make the object for all of props and then render 

//why did swiggy send the data from backend like this in caraousel/wrapper or more things why ?
// after seen the api we will learn very core concept use in industry what is swiggy is doing is known as config driven ui
// what is config driven ui?
// when we open swiggy firstly show offers available to me in my locality some other offer at different places 
// all caraousel will be different in different places will we build different application for delhi / chennai / or any other locality?
// there may no offers in any locality 
//then what is the solution 
// solution is config driven ui which means our website is driven by data/configs our delhi has different caraousel 
// config driven ui simply means all the ui which is driven by the data 
// config driven ui in simple terms we handle the ui according to data/config if we have no caraousal data then we not use this 
// carasoul card in ui so this is very important to use this config driven ui to maintain the consistency of our 1 application
// whatever config we send to the ui our ui will adapt and made like that so this is called config driven ui
//frontend engineer is good when u know why u send data which data you send how you send data this config driven ui 
//is very good choice
// ui and the data in the frontend is the most important thing which we display in frontend as frontend engineer

//why we need keys in react when we looping or mapping?
// if we have card containers this have a multiple childrens or when component there are at same levels 
// then this component must be uniquely represented suppose if there at one level there is 4 components 
// and we add one more component on the 1st place and if there is no id then react will re-render all this 
// restaurant card but if we give id then react exactly will know that the restaurant will place at what place 
// then react not re-render all the components so it just render one restaurant over here not render every restaurant 
// so this is the most helpful optimization in the code and in the key the key should be unique so keys are very important you 
// will never never never forgot if give a big performance hit if you not write the key there it will re-render everything if 
// we don't write the key some people also uses indexes as the key this logically looks right because everytime there is a unique key
// but react official documentation itself will say as use index as key is a very bad practice as index as a key in an anti-pattern
// if we use index as a key it is totally fine and also working very fine but documentation say not to use as it is bad practices 
// if there is no unique id then you can use index as a key but it is not recommended
//Reason :- if the container component sorted the list of objects in the state and mapped into an smaller ui components
// then it works completely as expected until i added a new item to the state and sorted / mapped it again
// At that time react goes confused about which properties belonged to which mapped component and that was made us questioning about
// everything we knew about react 
// not using keys (not acceptable) <<<<<< use indexes for keys <<<<<<<<<<<<<<<<<<<<< use unique index as keys