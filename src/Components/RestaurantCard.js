import {CDN_URL} from "../utils/constants"
// const StyleCard = {
//     backgroundColor: "#f0f0f0"
// }

//props is an object over here also instead of write props we structure it in fly itself like that {resName,cuisines}
//This is not something in react this is javascript
// const Restaurantcard = ({resName,cuisines})=>{ 
const Restaurantcard = (props) =>{
    // console.log(props);
    // const {resName,cuisine} = props;
    const {resData} = props; // as it is the whole array 
    // const restaurant = resData?.data || resData;// Use .data if it exists, otherwise use resData directly
    // const {} = resData?.data; optional chaining 
    //now by destructuring we remove resdata.cloudinaryImageId -> cloudinaryImageId;
    const {cloudinaryImageId,name,cuisines,sla,costForTwo,avgRating} = resData?.info;
    return(
        // In component we cannot add inline styling in component as same as we earlier done in html 
        //for this we have to make the style object
        // <div className="res-card" style={StyleCard}>
        // or we written object like that {{}} because it refer one style curly 
        // bracket and other nested curly bracket means {{}} that thing is object
        //if i write w-[200px] means we hardcoded and give width manually
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:cursor-pointer hover:bg-gray-200">
        {/* // style = {{backgroundColor:"#f0f0f0"}}> */}
            <img    
                className="res-logo rounded-lg"
                alt = "res-logo"
                height="250px"
                width="250px"
                src={CDN_URL+cloudinaryImageId}
            />
            {/* <h3>Pizza Hut</h3>
            <h4>Biryani,NorthIndia,Asian</h4>
            <h4>4.1 stars</h4>
            <h4>40-45mins</h4> 
            //This is complicated ui that resData.data or etc we will destructure it*/}
            {/* <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4> */}
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString} mins</h4>
        </div>
    )
};
export default Restaurantcard;
