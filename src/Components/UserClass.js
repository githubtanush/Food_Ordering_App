import React from "react";


//This is the way that how we create a class based component
//class based component is nothing just a normal js class
class UserClass extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
    }
    render(){
        //we also desturcture in above like we do in functional component
        const {name,location} = this.props;
        return(
            <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact: @tanush83</h4>
        </div>
        )
    };
};
export default UserClass;