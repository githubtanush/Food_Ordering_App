import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
//destucturing the component itself in upper
class About extends Component{

    constructor(props){
        super(props);
        console.log("parentCtor called");
    }
    componentDidMount(){
        console.log("ParentComponent is mounted");
    }

    render(){
        console.log("parentRender called");
        return(
        <div className="container">
            <h1>Hello</h1>
            <h2>I am about page and you see namaste react</h2>
            <User name={"Tanush Arora(function)"}/>
            <UserClass name={"Tanush Arora(class)"} location={"Ludhiana"}/>
        </div> 
    );
    };

};
//make the about to the classbased component
// const About = () => {
//     return(
//      <div className="container">
//         <h1>Hello</h1>
//         <h2>I am about page and you see namaste react</h2>
//         <User name={"Tanush Arora(function)"}/>
//         <UserClass name={"Tanush Arora(class)"} location={"Ludhiana"}/>
//      </div> 
//     );
// };
export default About;