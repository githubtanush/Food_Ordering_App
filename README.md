# Food_Ordering_App
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

##parcel 
 - Dev build for you 
 - Local server
 - HMR = Hot Module Replacement
 - File watcher algorithm - in c++ we write js parcel is keeping the track 
 - caching things for you - Faster builds
 - Image optimization
 - Minification - for minification parcel use different libraries 
 - Bundling the things
 - Compress our file
 - Treeshaking done by parcel - remove unused code for you
 - Transpilation
 - Zero configurations - parcel download all necessary plugins automatically
 - Reliable Caching while development
 - compatible with older version of browser
 - consistent hashing 
 - code splitting
 - differential bundling - means when app hosted it can host in any browser parcer will 
 take care for it means you have script type="module" this will automatically generates nomodule fallback
 for older version as well,depending on browser targets
 - diagnostics - beautiful diagnostics of error
 - Error handling 
 - https in dev
 - Multi core
 - -lazy module if we write lazy it will do lazy loading as well
 - different dev and production bundles

 #for initialize the package manager it is using package.json file 
 <!-- npm init -->

 #for downloading the dependency 
 <!-- npm i <dependency-name> -->

 <!-- #when we import/export used <script type="module" src="app.js"></script> -->

- config driven ui
- why unique key 
- jsx is independent not part of react 
- for components for each component create separate component file considered best practice
- use all the code in src folder is a good way that everyone understand why this is written in src folder
- React does not have any opinion about the file structure but it is best practice to consider all the 
- files related to each other are in one folder
- Avoid too much nesting
- Some people also try to name their file as .jsx and when we write .jsx it will give a great look
- what is the good way ? - not personal opinion but i prefer to use .js but if you want to write .jsx 
- it hardly matters it is don't matter in the industry all the code run by people with their own fashion 
- so i suggest to keep it simple why i write differently just use .js it is 0 difference when u write 
- .js or .jsx it hardly matters 
- for typescript you write tsx
- in import many people give extension as js or jsx but this is not mandatory even if we not give
- extension at import react will treat as javascript file i preferably don't want to maintain that .js or .jsx i prefer to be write as easy as i write code so that not very messy at all
- Whenever you have any hardcord data according to the industry standard never ever keep the hardcoded data in our components folder 
- even our cloudinary url not keep in the components folder because this is hardcoded string because that is the cdn url and in the header.js we use logo that is also hardcoded string never ever use the hardcoded material in components folder
- for hardcoded data we create one more folder named as config/constant or utility folder in this folder we can store the hardcoded data one by one
- for example for that things i make one utils folder in that constant file for links or hard coded things and we write it as a snake case (Capital letter)
- for resList i can put it in constant.js file but i make mockdata.js file for storing that resList 
- one way to export our data is export default (variable name) one thing is default also used for single thing 
- In one file we only have one default expo module cannot have multiple default expo in english default expo means by default my component file exports one things now on the other hand one way of exporting things is multiple export which is named exports which we done for variable , constant or etc. 
- If we have to export multiple things in the common file we use named exports but their is a slight difference in named exports  then we write like that import {name} from "./location"
- so name exports use like this and default export used with help of export
- Two types of export / import 
- Default export/import 
- export default component
- import component from "path"
- named export/import 
- export const component
- import {component} from "path"
 - but for multiple import/export don't export just import by name like that
 - import {component} from "path"
- can i use export default and export 
- every file standard according to industry that every file is not more than 100 lines if it is more than 100 lines then make it separate so that it is more clean and more structured
- best advice - don't use too much brain just use one file for one component
- Don't use named exports until we not want multiple things to export don't use export const
- Now we make our project or website dynamic
- when we filter restaurant with the top rated restaurant then we make button and set onClick attribute in it and also if we add one more restaurant in the data then filter button automatically filters the data and efficiently handling the dom manipulation 
- so when we say react is fast it means react is fast in efficient dom manipulation it is doing dom manipulation efficiently and also the ui changes according to the data 
- so when anyone say react is fast - react is fast because it do dom manipulation efficiently
# React Hooks
- right now listofRestaurant is normal javascript variable now if i give superpowers from react and make it superpowerful react variable we make the state variable 
- lets see if we want to give super power to listofRestaurants then we use hooks this is the information to hooks
- Specifically for listofRestaurants if we give super powers to this variable we use the useState
- React hook is the normal js function which is given to us by react it is prebuilt the utility function given by react to us
- React hooks is normal js utility function written by facebook developers they written this inside the react they give all the utility functions in our code 
- there are multiple react hooks there are two very important react hooks:- 
- one is Usestate and other is useEffect the two most important hooks 99% of the time we use this hooks
80% of the time useState and 20% of the time useEffect
- UseState()(Superpowerful react variables in react)
- useEffect()
- hooks import in the react via named import
- Whenever we say hook means we talk it about the utility function
- Now what is React hook?
- It is a normal js function which give some utilities useState give us powerful state variable
- React Reconcilation algorithm?
- Whenever something changes known as reconcilation
- what is actual dom?
- tags like div,img
- what is virtual dom?
- copy of actual dom which is stored in the form of object { div ... ..} like that 
- What is Diff algorithm?
- basically use to find out the difference between the old ui vs new ui and after finding the difference re-render all the dom in cycle
- why 2 element in const[list,setList] this is destructuring 
- as you know we write code like that
const[list,setList] = useState()
when we destructure or it meaning is 
const arr = useState();
const[list,setList] = useState()
like that const list = arr[0];
const setList = arr[1];
setList is used for updating the ui according to every change 
- There are 2 elements in state variable because we need a trigger to start the diff algorithm and update the ui that is why create the second function. when we call second function it will automatically update ui this is react algorithm

# Monolith and microservice architecture
- Monolith architecture we do all the things in one single project 
- Microservice means we break the components into smaller parts or components and then make the different ports like for ui 1234 sms 3000 backend 1000 we make different ports and at the end we merge all the ports with a single domain name and then single domain call different different url and how the api interact with each other
- One more benefit of microservices architecture is you can write your component code in your own convenience react/golang/java/c++ and many more it will merge then it work properly but on the other hand monolithic not give us that sukoon

