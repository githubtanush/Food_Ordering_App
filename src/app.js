import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


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