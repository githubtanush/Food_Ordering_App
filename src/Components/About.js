import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
     <div className="container">
        <h1>Hello</h1>
        <h2>I am about page and you see namaste react</h2>
        <User name={"Tanush Arora(function)"}/>
        <UserClass name={"Tanush Arora(class)"} location={"Ludhiana"}/>
     </div> 
    );
};
export default About;