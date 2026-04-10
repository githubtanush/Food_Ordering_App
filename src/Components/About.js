import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
//destucturing the component itself in upper
class About extends Component{

    constructor(props){
        super(props);
        console.log( "parentCtor called");
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
            {/* <User name={"Tanush Arora(function)"}/> 
            make one more components to exactly know how react lifecycle works
            so we create one more*/}
            <UserClass name={"First"} location={"Ludhiana"}/>
            <UserClass name={"Second"} location={"Barnala"}/>
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


/*

 - parent ctor
 - parent render 
    
        -First ctor
        -First render

          <DOM UPDATED- IN SINGLE BATCH>
        -second ctor
        -second render

          <DOM UPDATED - IN SINGLE BATCH>
        - First component did mount
        - second component did mount

 - parent component did mount

 This is the very precious knowledge that earned from lots n lots of documentation
 read and resources so say this in interview

*/