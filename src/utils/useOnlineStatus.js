import { useEffect,useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(() =>{
        //browser give us the utility of window object and window object gives us the utility about 
        //the online/offline status that what we can seen so we use windows to use this utility of online/
        //offline status
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });

    },[]); //dependency array to run only once to check about online/offline status
    
    //we return simply boolean value
    return onlineStatus;
}
export default useOnlineStatus;