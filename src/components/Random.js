import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random=()=>{
    const {gif,loading,fetchData}=useGif();

    return(
        <div className=" w-3/4 sm:w-1/2 bg-[#188bff] rounded-lg border border-blue-800 flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl italic underline font-bold">
                A Random GIF 
            </h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width="350" />)
            }
            <button onClick={()=>fetchData()} className="bg-[#142b57] w-10/12 text-lg rounded-lg mb-[20px] py-2 text-white">
                Generate
            </button>
        </div>
    )
}

export default Random