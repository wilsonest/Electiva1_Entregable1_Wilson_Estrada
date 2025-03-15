import { useEffect } from "react";
import goku from './goku.png';


export const ConsumoApi = () => {

useEffect (() => {
    console.log("My componen is mounted")
});

    return (
        <>
            <img src={goku} alt="" />
            {/* <h1>Hello</h1> */}
        </>);
};