import { useEffect, useState } from "react";
const User = ({name})=>{
    //In the functional component creating the state variables with the help of hooks
    //and behind the scene react works like as same when we creating the class based 
    //component in react
    const [count] = useState(0);
    const [count2] = useState(1);

    //useEffect with dependency array so it must be loaded only one time
    useEffect(() =>{
        console.log("useEffect Render");
    },[]); 

    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h2>{count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @tanush83</h4>
        </div>
    );
};
export default User;