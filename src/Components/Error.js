import React from "react";
import { useRouteError } from "react-router-dom";
//we firstly import useRouteError via named import and then use it to clearity more about
//what type of error it is
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="container">
            <h1>OOPS!!</h1>
            <h2>Something went wrong!!!</h2>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    );
};
export default Error;