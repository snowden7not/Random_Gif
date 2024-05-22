import React from 'react';
import loader from "./infinite-spinner.svg";
const Spinner=()=>{
    return (
        <div>
            <img src={loader} width="100" height="100" alt="loading wala spinner"/>
        </div>
    )
}

export default Spinner