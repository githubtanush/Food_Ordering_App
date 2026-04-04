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


# Let's explore the React world 
- Till now we have copied the data from the swiggy api now this is not the good part now we have take the data dynamically. 
- but before doing that we discuss about how we fetch data from the backend there are two ways to fetch the data from the backend / or we have two approaches to fetch data from backend :- 
- 1st way AppLoads ===> API calling 5000ms waiting ui ===> after that rendering
- 2nd way AppLoads ===> Render atleast skeleton ===> API calling 5000ms ===> Again re-render with new data
- so which is the best way ?
- 2nd way is the best as when your app is loaded render it rapidly atleast you see the skeleton then api calling and then it again re-render with the original data 
- Now your question is in that there is rendering two times ?
- No problem , React is very fast in rendering React main advantage is that it renders very fast the whole app so it is ok render two times as it gives better ux (user Experience)
- it's does not means you render 100 times as it is good but above case render two times is ok so don't think you render as many times it will good 
## useEffect  
- import with same as useState function via named import 
- useEffect is an arrow function which is used callback function and use one dependency array 
- useEffect is used because we need 2nd way of rendering and useEffect help in this 
- What is the benefit of useEffect ? - In useEffect if it is inside in the body component then it will render the body component then after call the api and then re-render component again with new data so this is very helpful for us to use useEffect as it makes our life fully easy
- Used optional chaining when we choose some specific part in live data 
- optional chaining is the better and optimized way that use in industry
- now after calling live api we don't have need more for mockdata now we can also delete that file
- We use shimmer ui for comfortable loading time with user 
- useState() function understanding 
-  why we need useState() function ? 
- because with the local variable the object will be updated with the new value but the ui will not be updated so we use the state variable which has the superpower of react and here we use another variable which is associated or start with set which is the trigger for the react to refresh the ui and update so we use the set variable 
- we use useState() function as it is used for updating the ui efficiently and react is fast in efficiently rendering 
- the state variable can update the ui efficiently because react is fast in dom-manipulation only set variable updated with new value and then it will render
- we make one login / logout button to understand it carefully 
- now we can make the search button **useState** hook is essential for managing dynamic data that changes over time and needs to be reflected in the user interface (UI). 
- depth in useState hook by create different different state variables about filteredRestaurants
- listofRestaurants and searchText state variable 
- solve the cors plugin issue via corsproxy.io
- means we learnt about real api handling + hooks + shimmer ui + depth of useState hook + depth of useEffect hook and many more this is very knowledgable lesson
- if no dependency array => useEffect is call on every render 
- if dependency array is empty = [] => useEffect will called on one initial render(just once)
- if dependency array is [btnNameReact] => called everytime when btnName is updated 
- and always remind that it will always called on their first initial render evertime unless the condition fulfil or not
- never create state variables outstide the functional component always called useState variables inside your functional component as it is used to create local state variables inside your functional component
- as js is single synchronous threaded language try to call this hooks on top try to use useState on hook
- when we start from top create state variables on top
- Also react will understand state variables properly
- never use your useState hook or create state variables inside if/else / function or loops as - it is written in documentation . This can create inconsistencies in your project. because for some renders sometimes there would be searchText and sometimes not .
- so what i am trying to say is variables inside the function component on higher level and nowhere else if u will follow this yiu will never their issue with state variables . As this is good practice or best practice if we follow this code will run smoothly. 

# Routing
- Now we come into routing
- first of all for enable router for move in different pages for example about page feedback page by /about /feedback we simply use a package which is known as react-router-dom
- For downloading the react-router-dom we download it by using **npm i react-router-dom** 
- we use named import and use **createBrowserRouter** for it to create our router that browse with the help of apis
- we use **ReactProvider** to provide the router to the react earlier we give them directly but now we provide via ReactProvider
- we also create our own error page and we improve to give the error on the page via using useRouteError hook which is very useful to show an error in the browser so that developer can understand exactly what error is there and useRouteError is also import via named import
- 	react-router alag se install karne ki zarurat nahi hoti
-	react-router-dom@6 automatically handle karta hai
## now we learn about child Routes and many more inside it 
- so before talking about the child routes we talk about how we can header and footer in tight means fix at one place and just the body component changes in th ebody allowed then what we do?
- To make this type of functionality happen what i have to make is children router via code like that
``` 
    const appRouter = createBrowserRouter([
        {
            path : "/"
            element : <AppLayout/>
            children:[
                {
                    path:"/about,
                    element:<About/>
                },
                {
                    path:"/contactus
                    element:<contact/>
                },
            ],
            errorElement : <Error/>
        },
    ]);
```
- so,whatever we want to display we have to push in our children whatever we want
- Now AppLayout has 3 children accroding to path but where should i load this over here in this outlet according to path by using outlet has outlet is a component over here Outlet will be filled with children according to our path. so , we import outlet via named import we pass this children in outlet now according to path it will render . This is how we create children route in this app.This outlet will be replaced via component where we using outlet . The end user does not even let to know here we are make some outlets but we loading this pages according to outlet. This is how we create child route in our app
- *Now we create link in about home contactus page we create the link?*
- earlier we used to create an anchor tag and href it takes me to about us page but when we are in react and we want to move to other page or about us. 
- never ever used the anchor tag because when i go to aboutus page the whole page got refreshed. i don't want to refresh our whole page or we can say that whole component but still want to go our route This will make our app faster
- They navigate to the different page without re-loading the whole page. Now we used to trick which helps us to go to page without even re-loading. so we use link in react. first we import from react-router-dom via named import only difference between anchor tag and link tag is 
``` <a href="url"></a> 
    <Link to="url"></Link>
```
- instead using a href we use Link to it not reloading the whole page as my whole page will not refresh don't reload the whole page will not refresh or don't reload the page so, when we navigating to different route always use Link to that does not refresh the whole page just re-load the components
-  Link                     | anchor                                                             refresh the component | reload the whole page
- this is why our react is known as the single page application. In the whole single page application it just changing the components It is just a single page application. if i want to go to the new route also it just changing the components not reloading the whole page In the earlier days we make many html pages contactus/about etc. Browser will not reload the website and this is why react known as single page application 
- There are two types of routing 
- client side routing 
- server side routing 
- index.html contactus.html aboutus.html -> read information -> and then shown to website known as server side routing It means you make a network call and the page come from server known as server side scripting 
- all the components are already loaded into our app. It's already have the code. It does not make any network call. It does make only network call when i make network call in api.
- and that is the best defination of single page application 
- *Single page application * is just like one page with just the components getting render via client side routing. These are very important things we need re-routing why so this is very important. 
- Now when we learn about basic routing createBrowserRouter, RouterProvider,Outlet. Now we want to make dynamic routing here we create routers for different different restaurant we want to show restaurant menu page and how we handle all this things and enable the dynamic routing

## Dynamic Routing
- As we do the dynamic routing we just make the restaurant menu api by using restaurant menu page
- so we make one more component named as restaurant-menu so that we create one new api and linked it with restaurant-menu component
- so we first of all add one more path in app.js file like that /rest-menu/:resId as this :(colon) represents that the link is dynamic and changing the output data according to the id 
- so now as we make the res-menu card we fetch the data using useEffect api and u know very well when the data will be displayed will use state variable so that when the data fetched from the api then it would be set by state variable and data will loaded in that ui 
- Also make one more ui shimmer for that ux is good for the user 