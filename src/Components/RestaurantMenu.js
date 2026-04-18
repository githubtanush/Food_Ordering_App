import React, { useEffect , useState } from "react";
import Shimmer from "./Shimmer"
import resList from "../utils/mockData2";
import Restaurantcard from "./RestaurantCard";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


const RestaurantMenu = () => {

    //As react will need the trigger for that ui will be updates it wants state variable and 
    //when we update the state variable with data it will trigger the react to do re-rendering 
    //the whole component but change or refresh only that component which is actually changed
    //so we need the useState component
    // const[resInfo,setResInfo] = useState(null); as swiggy api does not fetched
    const [resInfo,setResInfo] = useState(resList);
    //now we use useParams for reading from the parameters
    //Another great utility of react-router-dom
    // and i destructure my resId on the top now this resId i used to fetch dynamic data
    const {resId} = useParams();

    // so now we also know why we use dependency array because if dependency array is not there 
    // everytime every refresh will refresh the useEffect which is bad as api fetching every time
    // so we use dependency array and useEffect so that when whole component render and when the data
    // will come it will re-render again via using state variable so it means we need state variable

    //As swiggy api has lot of issue in fetching cors error or many other lots n lots of blockages 
    //so i drive mockdata from swiggy api
    // useEffect(() =>{
    //     console.log("useEffect called!!!");
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {

    //     console.log("fetchMenu rendered");
    //     const data = await fetch(
    //      we should not keep like this our api we move it into constants
    //      and this resId is know dynamic
    //       MENU_API_URL+resId 
    //     );
        // console.log("API Response : ", data);
        // const json = await data.json(); //directly json mein convert mat kro pehle text mein convert kro
        // const text = await data.text();
        // console.log("Text : ",text);
        // console.log(await data.text());
        // console.log(data.headers['content-type']);
        // const json = text? JSON.parse(text) : null; // agr kuch text mila toh json mein pass kro nhi to null return kro
        //or direct yeh likhna se better for extra security yeh add kro 
        // if(!text) return ; // it prevents from crashes
        //now convert ino json
        // const json = JSON.parse(text);
    //     const contentType = data.headers.get('content-type');
    //     console.log("Content-Type:", contentType);

    //     if (!contentType || !contentType.includes('application/json')) {
    //         throw new Error(`Expected JSON, got: ${contentType}`);
    //     }
    //     const json = JSON.parse(text);

    //     console.log("Full json : ", json);
    //     console.log("Cards : ", json?.data?.cards);
    //     setResInfo(json);
    // }

    //Earlier my resInfo is null and when we fetch the name by destructuring it it will shows the error 
    //that was we do early shimmer return  when i fetch data from api this type of error occuring so 
    //we handle this every error taught us many so by this error we learn not just everywhere used this ternary 
    //operator blindly so we used this shimmer ui early as in fetch api we initialize useState with null 
    //that was why everytime shimmer is called but now shimmer is called and res is load later so restaurant 
    //card render properly
    // const resInfo = useRestaurantMenu(resId);
    
    const restaurant = resList.find(
        (res) => res.info.id === resId
    );

    if(resInfo === null) return <Shimmer/>

    //Destructuring 
    //This is why graphql used because it helps you with overfetching load only data required for app
    //That a major use of using graphql if we use graphql this structures become less bulky
    // const[name,cuisines,costForTwoMessage] = resInfo?.cards[2]?.card?.card?.info;
    // const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resList.menu);
    //This fetched according to the live API's
    // const {itemCards} = restaurant?.menu || [];
    const itemCards = restaurant?.menu
    console.log("resId:", resId);
console.log("restaurant:", restaurant);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>Look's like you're offline !!! please check your internet connection!!!</h1>
        );
    }
    
    return(
        <div className="menu">
            {/* //This is very clumsy so we should destructure it first in the top */}
             {/* <h1>{resList?.data?.cards?.[0]?.card?.card?.info?.name}</h1>  */}
             <h1>{restaurant?.info?.name}</h1>
            <p>
                {restaurant?.info?.cuisines.join(", ")} - {restaurant.info?.costForTwo}
            </p> 
            <ul>
                {/* with live api
                itemCards[0].card.info.name
                itemCards[1].card.info.name
                itemCards[2].card.info.name like this
                Now we will write map in a efficient way
                This itemcard map in such a way that that for each item i want my item.card.info.name
                and this is how we map for itemCards.map this means iterate through itemCard and iterate
                listitem out of it
                whenever we using a map always use a key
                */}
            {   
            itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ₹
                        {item.card.info.price / 100}
                    </li>
                ))}
                {/* // {
                // itemCards.map(item => <li key="">{item.card.info.name}</li>)
                // }

                // <li>{resList[0]?.menu[0]?.card?.info?.name}</li>
                // <li>{resList[0]?.menu[1]?.card?.info?.name}</li>
                // <li>{resList[0]?.menu[2]?.card?.info?.name}</li> */}
            </ul>
{/*  A lot of people face issue when iterate */}
            {/* {
                resList.map((res) => (
                    <Restaurantcard key={res.info.id} resData ={res} Restaurant/>
                ))
            } */}
        </div>
    );
};
export default RestaurantMenu;


//you notice it is a single page application as even a single load does not require for it