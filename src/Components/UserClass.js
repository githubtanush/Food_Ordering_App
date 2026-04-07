import React from "react";


//This is the way that how we create a class based component
//class based component is nothing just a normal js class
class UserClass extends React.Component{
    constructor(props){
        super(props);

        //In the class based component we create state variables like that:- 
        this.state = {
            count:0,
            count2:1,
        }
        //and behind the scene react work like that create one big state variables 
        // and store all the state variables in that 

        console.log(props);
    }
    render(){
        //we also desturcture in above like we do in functional component
        const {name,location} = this.props;
        //and state variables calls like that 
        const{count,count2} = this.state;
        return(
            <div className="user-card">
            <h1>Count : {count}</h1>
            <h2>Count2 : {count2}</h2>
            <button onClick={() => {
                //Never ever update state variables directly this will create inconsistencies in code that's why 
                //we can't create like that
                // this.state.count => this.state.count+1;
                //we set it via use this 
                this.setState({
                    count: this.state.count+1,
                    count2: this.state.count2+1,
                });
            }}
            >
                cntIncrease</button>
            <h2>Name: {name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact: @tanush83</h4>
        </div>
        )
    };
};
export default UserClass;